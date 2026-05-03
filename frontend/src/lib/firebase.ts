import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit, serverTimestamp, type Firestore, doc, setDoc } from 'firebase/firestore';
import type { Message } from '../types';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const isConfigured = Boolean(firebaseConfig.projectId);

let db: Firestore | null = null;

if (isConfigured) {
  try {
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
  } catch (error) {
    console.error("Failed to initialize Firebase:", error);
  }
}

export interface ChatSession {
  id: string;
  title: string;
  updatedAt: number;
}

export async function createOrUpdateSession(sessionId: string, title: string) {
  if (!db) return;
  try {
    const sessionRef = doc(db, 'chats', sessionId);
    await setDoc(sessionRef, {
      title,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.warn("Failed to create/update session.", error);
  }
}

export async function loadSessions(limitCount: number = 10): Promise<ChatSession[]> {
  if (!db) return [];
  try {
    const chatsRef = collection(db, 'chats');
    const q = query(chatsRef, orderBy('updatedAt', 'desc'), limit(limitCount));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(docSnap => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        title: data.title || 'Untitled Chat',
        updatedAt: data.updatedAt?.toMillis() || Date.now(),
      } as ChatSession;
    });
  } catch (error) {
    console.warn("Failed to load sessions.", error);
    return [];
  }
}

/**
 * Saves a message to Firestore if configured.
 * Fails gracefully otherwise.
 */
export async function saveMessageToFirestore(message: Message, sessionId: string = 'anonymous_session') {
  if (!db) return;
  try {
    const chatRef = collection(db, 'chats', sessionId, 'messages');
    await addDoc(chatRef, {
      ...message,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    console.warn("Failed to save message to Firestore. Continuing gracefully.", error);
  }
}

/**
 * Loads recent messages from Firestore.
 * Returns an empty array if not configured or on failure.
 */
export async function loadMessagesFromFirestore(sessionId: string = 'anonymous_session', limitCount: number = 50): Promise<Message[]> {
  if (!db) return [];
  try {
    const chatRef = collection(db, 'chats', sessionId, 'messages');
    const q = query(chatRef, orderBy('createdAt', 'asc'), limit(limitCount));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: data.id || doc.id,
        role: data.role,
        content: data.content,
        timestamp: data.timestamp,
        language: data.language,
      } as Message;
    });
  } catch (error) {
    console.warn("Failed to load messages from Firestore. Returning empty history.", error);
    return [];
  }
}

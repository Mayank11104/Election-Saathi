import { STARTER_CHIPS } from '../constants';

export type MessageRole = 'user' | 'assistant';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: string;
  isLoading?: boolean;
  language?: 'english' | 'hindi';
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export type Language = 'english' | 'hindi';

export type StarterChip = typeof STARTER_CHIPS[number];

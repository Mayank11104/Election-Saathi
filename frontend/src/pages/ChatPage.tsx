import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, RefreshCw, Send, Globe } from 'lucide-react';
import ChatMessage from '../components/chatpage/ChatMessage';
import type { Message } from '../components/chatpage/ChatMessage';
import CapabilityCards from '../components/chatpage/CapabilityCards';
import StarterChips from '../components/chatpage/StarterChips';

/* ─── Ashoka Chakra SVG (small header variant) ─── */
function MiniChakra() {
  const n = 24, cx = 8, cy = 8, r = 7, ir = 1.5;
  return (
    <svg viewBox="0 0 16 16" className="w-4 h-4 animate-spin-slow" aria-hidden="true">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#0D47A1" strokeWidth="0.8" />
      <circle cx={cx} cy={cy} r={ir} fill="none" stroke="#0D47A1" strokeWidth="0.5" />
      {Array.from({ length: n }).map((_, i) => {
        const a = (i * 360) / n - 90;
        const rad = (a * Math.PI) / 180;
        return (
          <line key={i}
            x1={cx + ir * Math.cos(rad)} y1={cy + ir * Math.sin(rad)}
            x2={cx + r * Math.cos(rad)} y2={cy + r * Math.sin(rad)}
            stroke="#0D47A1" strokeWidth="0.35" />
        );
      })}
    </svg>
  );
}

/* ─── Large Ashoka Chakra SVG (empty state) ─── */
function LargeChakra() {
  const n = 24, cx = 32, cy = 32, r = 28, ir = 5;
  return (
    <svg viewBox="0 0 64 64" className="w-16 h-16 animate-spin-slow" aria-hidden="true">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#0D47A1" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={ir} fill="none" stroke="#0D47A1" strokeWidth="1" />
      {Array.from({ length: n }).map((_, i) => {
        const a = (i * 360) / n - 90;
        const rad = (a * Math.PI) / 180;
        return (
          <line key={i}
            x1={cx + ir * Math.cos(rad)} y1={cy + ir * Math.sin(rad)}
            x2={cx + r * Math.cos(rad)} y2={cy + r * Math.sin(rad)}
            stroke="#0D47A1" strokeWidth="0.7" />
        );
      })}
    </svg>
  );
}



/* ─── Follow-up suggestions ─── */
function getSuggestions(response: string): string[] {
  if (response.includes('Form 6')) return ['What documents do I need?', 'How long does it take?'];
  if (response.includes('EVM')) return ['What is VVPAT?', 'Can EVMs be hacked?'];
  if (response.includes('counting')) return ['What is VVPAT verification?', 'What is First Past the Post?'];
  if (response.includes('MCC')) return ['What happens if MCC is violated?', 'Who enforces the MCC?'];
  return ['Tell me more', 'What else should I know?'];
}

/* ─── Helpers ─── */
function getTimestamp(): string {
  return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
}

function createId(): string {
  return Math.random().toString(36).substring(2, 10);
}

const LANGUAGES = [
  { code: "auto", label: "Auto 🔍" },
  { code: "en",   label: "English" },
  { code: "hi",   label: "हिंदी" },
  { code: "mr",   label: "मराठी" },
  { code: "ta",   label: "தமிழ்" },
  { code: "te",   label: "తెలుగు" },
  { code: "bn",   label: "বাংলা" },
  { code: "kn",   label: "ಕನ್ನಡ" },
  { code: "gu",   label: "ગુજરાતી" },
];

/* ═══════════════════════════════════════════════════════════
   CHAT PAGE
   ═══════════════════════════════════════════════════════════ */
export default function ChatPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string>("auto");
  const [langToast, setLangToast] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = useCallback(
    async (text?: string) => {
      const content = (text || input).trim();
      if (!content || isLoading) return;

      // Extract history
      const history = messages
        .filter((m) => !m.isLoading)
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      // Add user message
      const userMsg: Message = {
        id: createId(),
        role: 'user',
        content,
        timestamp: getTimestamp(),
      };

      // Add loading placeholder
      const loadingMsg: Message = {
        id: createId(),
        role: 'assistant',
        content: '',
        timestamp: '',
        isLoading: true,
      };

      setMessages((prev) => [...prev, userMsg, loadingMsg]);
      setInput('');
      setIsLoading(true);
      setSuggestions([]);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question: content, history, language_preference: selectedLang }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const assistantMsg: Message = {
          id: createId(),
          role: 'assistant',
          content: data.response,
          timestamp: getTimestamp(),
        };

        setMessages((prev) => {
          // Remove loading message, add real response
          const filtered = prev.filter((m) => !m.isLoading);
          return [...filtered, assistantMsg];
        });
        setSuggestions(getSuggestions(data.response));
      } catch (error) {
        console.error('Error fetching chat response:', error);
        
        const errorMsg: Message = {
          id: createId(),
          role: 'assistant',
          content: 'Maafi chahta hoon — kuch technical issue aa gaya. 🙏 Please try again in a moment.',
          timestamp: getTimestamp(),
        };

        setMessages((prev) => {
          const filtered = prev.filter((m) => !m.isLoading);
          return [...filtered, errorMsg];
        });
      } finally {
        setIsLoading(false);
        inputRef.current?.focus();
      }
    },
    [input, isLoading, messages, selectedLang],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setInput('');
    setIsLoading(false);
    setSuggestions([]);
    inputRef.current?.focus();
  };

  const charCount = input.length;
  const maxChars = 500;
  const isEmpty = messages.length === 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col h-screen bg-surface"
    >
      {/* ─── HEADER ─── */}
      <header className="flex-shrink-0 bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => navigate('/')}
              className="p-1.5 -ml-1.5 rounded-lg hover:bg-surface transition-colors"
              aria-label="Go back to home"
            >
              <ArrowLeft className="w-5 h-5 text-text-muted" />
            </button>
            <MiniChakra />
            <div>
              <h1 className="text-base font-bold text-saffron font-[var(--font-heading)] leading-tight">
                Election Saathi
              </h1>
              <p className="text-[11px] text-text-muted leading-tight">Your civic companion</p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleNewChat}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
                         text-text-muted hover:bg-surface hover:text-saffron transition-all"
              aria-label="Start new chat"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Chat</span>
            </button>
          </div>
        </div>
      </header>

      {/* ─── LANGUAGE SELECTOR BAR ─── */}
      <div className="flex-shrink-0 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-2 flex items-center gap-3">
          {/* Label */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Globe className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">
              Reply in:
            </span>
          </div>

          {/* Divider */}
          <div className="w-px h-4 bg-gray-200 flex-shrink-0" />

          {/* Pills — scrollable */}
          <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setSelectedLang(lang.code);
                  const toastMessages: Record<string, string> = {
                    auto: "Auto-detecting your language 🔍",
                    en: "Switched to English 🇬🇧",
                    hi: "हिंदी में जवाब मिलेगा 🇮🇳",
                    mr: "मराठीत उत्तर मिळेल 🇮🇳",
                    ta: "தமிழில் பதில் கிடைக்கும் 🇮🇳",
                    te: "తెలుగులో సమాధానం వస్తుంది 🇮🇳",
                    bn: "বাংলায় উত্তর পাবেন 🇮🇳",
                    kn: "ಕನ್ನಡದಲ್ಲಿ ಉತ್ತರ ಸಿಗುತ್ತದೆ 🇮🇳",
                    gu: "ગુજરાતીમાં જવાબ મળશે 🇮🇳",
                  };
                  setLangToast(toastMessages[lang.code] || "");
                  setTimeout(() => setLangToast(""), 2500);
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 border ${
                  selectedLang === lang.code
                    ? "bg-orange-500 text-white border-orange-500 shadow-sm scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:border-orange-400 hover:text-orange-600 hover:bg-orange-50"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CHAT WINDOW ─── */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-6">
          {isEmpty ? (
            /* ─── EMPTY STATE ─── */
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-3"
              >
                <LargeChakra />
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary text-center">
                  Namaste! I'm Election Saathi 🇮🇳
                </h2>
                <p className="text-sm text-text-muted text-center max-w-md">
                  Ask me anything about Indian elections — in English, हिंदी, or 7 other Indian languages
                </p>
              </motion.div>

              <CapabilityCards />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="w-full max-w-xl"
              >
                <p className="text-xs text-text-muted text-center mb-3 font-medium">
                  Try asking:
                </p>
                <StarterChips onSelect={(q) => handleSend(q)} />
              </motion.div>
            </div>
          ) : (
            /* ─── MESSAGES ─── */
            <div className="flex flex-col gap-4">
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}

              {/* Follow-up suggestions */}
              {suggestions.length > 0 && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-2 ml-10"
                >
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSend(s)}
                      className="px-3.5 py-1.5 text-xs sm:text-sm rounded-full
                                 bg-saffron-light border border-saffron/20 text-text-primary
                                 hover:bg-saffron/10 hover:border-saffron/40
                                 hover:shadow-sm transition-all duration-200 cursor-pointer"
                    >
                      {s}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>
          )}
        </div>
      </main>

      {/* ─── INPUT AREA ─── */}
      <footer className="flex-shrink-0 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 pt-3 pb-[max(env(safe-area-inset-bottom),16px)] sm:pb-3">
          <AnimatePresence>
            {langToast && (
              <motion.div
                key="lang-toast"
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="text-center text-xs text-orange-600 bg-orange-50 border border-orange-200 py-1 px-4 rounded-full mx-auto w-fit mb-2"
              >
                {langToast}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex items-end gap-2">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => {
                  if (e.target.value.length <= maxChars) setInput(e.target.value);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Indian elections..."
                rows={1}
                className="w-full resize-none rounded-xl border border-gray-200 bg-surface
                           px-4 py-3 pr-12 text-sm text-text-primary placeholder:text-text-muted/50
                           focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20
                           transition-all duration-200"
                style={{ minHeight: '44px', maxHeight: '120px' }}
                onInput={(e) => {
                  const el = e.target as HTMLTextAreaElement;
                  el.style.height = 'auto';
                  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
                }}
                disabled={isLoading}
              />

              {/* Char counter */}
              {charCount > 0 && (
                <span
                  className={`absolute right-3 bottom-1.5 text-[10px] ${
                    charCount > 400 ? 'text-red-500' : 'text-text-muted/40'
                  }`}
                >
                  {charCount}/{maxChars}
                </span>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className="w-11 h-11 rounded-full bg-saffron text-white flex items-center justify-center
                         disabled:opacity-40 disabled:cursor-not-allowed
                         hover:bg-saffron-hover transition-colors shadow-sm flex-shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4.5 h-4.5" />
            </motion.button>
          </div>

          {/* Bottom hints */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mt-2 px-1 gap-1 sm:gap-0">
            <p className="hidden sm:block text-[10px] text-text-muted/50">
              Press Enter to send · Shift+Enter for new line
            </p>
            <p className="text-[10px] text-text-muted/50 text-center">
              🗳️ Non-partisan · Educational · For every Indian citizen
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

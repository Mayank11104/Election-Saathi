import { motion } from 'framer-motion';
import LoadingDots from './LoadingDots';
import MessageFormatter from './MessageFormatter';

/* Tiny inline Ashoka Chakra avatar */
function ChakraAvatar() {
  const spokes = 24;
  const cx = 12, cy = 12, r = 10, ir = 2.5;
  return (
    <div className="w-7 h-7 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#FF9933" strokeWidth="1.2" />
        <circle cx={cx} cy={cy} r={ir} fill="none" stroke="#FF9933" strokeWidth="0.8" />
        {Array.from({ length: spokes }).map((_, i) => {
          const angle = (i * 360) / spokes - 90;
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={cx + ir * Math.cos(rad)}
              y1={cy + ir * Math.sin(rad)}
              x2={cx + r * Math.cos(rad)}
              y2={cy + r * Math.sin(rad)}
              stroke="#FF9933"
              strokeWidth="0.5"
            />
          );
        })}
      </svg>
    </div>
  );
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  isLoading?: boolean;
}

interface Props {
  message: Message;
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, x: isUser ? 30 : -30, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {/* Assistant avatar */}
      {!isUser && <ChakraAvatar />}

      <div className={`max-w-[85%] sm:max-w-[75%] ${isUser ? 'items-end' : 'items-start'} flex flex-col`}>
        {/* Label */}
        {!isUser && !message.isLoading && (
          <span className="text-[11px] font-semibold text-saffron mb-1 ml-1">
            Election Saathi
          </span>
        )}

        {/* Bubble */}
        <div
          className={`px-4 py-3 ${
            isUser
              ? 'bg-saffron text-white rounded-2xl rounded-tr-md'
              : 'bg-white border border-gray-200 text-text-primary rounded-2xl rounded-tl-md'
          }`}
        >
          {message.isLoading ? (
            <LoadingDots />
          ) : (
            <div className={isUser ? 'text-sm leading-relaxed' : ''}>
              {isUser ? message.content : <MessageFormatter text={message.content} />}
            </div>
          )}
        </div>

        {/* Timestamp */}
        {!message.isLoading && (
          <span
            className={`text-[10px] mt-1 mx-1 ${
              isUser ? 'text-saffron/50' : 'text-text-muted/50'
            }`}
          >
            {message.timestamp}
          </span>
        )}
      </div>
    </motion.div>
  );
}

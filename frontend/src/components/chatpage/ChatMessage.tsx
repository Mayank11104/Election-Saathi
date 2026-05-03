import { motion } from 'framer-motion';
import React, { useState, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';
import LoadingDots from './LoadingDots';
import MessageFormatter from './MessageFormatter';
import { trackEvent } from '../../utils/analytics';

/* Tiny inline Ashoka Chakra avatar */
function ChakraAvatar() {
  const spokes = 24;
  const cx = 12, cy = 12, r = 10, ir = 2.5;
  return (
    <div className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] lg:w-[32px] lg:h-[32px] rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0">
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

import type { Message } from '../../types';

interface Props {
  message: Message;
}

const ChatMessage = function ChatMessage({ message }: Props) {
  const isUser = message.role === 'user';
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    if (!message.content) return;
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    trackEvent('copy_message');
    setTimeout(() => setCopied(false), 2000);
  }, [message.content]);

  return (
    <motion.div
      initial={{ opacity: 0, x: isUser ? 30 : -30, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {/* Assistant avatar */}
      {!isUser && <ChakraAvatar />}

      <div className={`max-w-[88%] sm:max-w-[78%] lg:max-w-[640px] ${isUser ? 'items-end' : 'items-start'} flex flex-col group`}>
        {/* Label */}
        {!isUser && !message.isLoading && (
          <div className="flex items-center justify-between w-full mb-1 ml-1 px-1">
            <span className="text-[11px] font-semibold text-saffron">
              Election Saathi
            </span>
            <button
              onClick={handleCopy}
              className="copy-btn opacity-0 group-hover:opacity-100 flex items-center gap-1 text-[10px] text-text-muted hover:text-saffron transition-all"
              aria-label="Copy message"
            >
              {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
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
            <div className={isUser ? 'text-[clamp(13px,1.5vw,13.5px)] leading-relaxed' : ''}>
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
};

export default React.memo(ChatMessage);

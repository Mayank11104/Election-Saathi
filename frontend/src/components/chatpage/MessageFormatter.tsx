import React, { useMemo } from "react";

interface Props {
  text: string;
}

import { 
  isNumberedStep, 
  isBullet, 
  isHeading, 
  isBoldLine, 
  isPortalLine, 
  isWarningLine, 
  isSuccessLine, 
  isProTip 
} from "../../utils/parser";

const isDevanagari = (text: string): boolean => /[\u0900-\u097F]/.test(text);

// ─── Inline text renderer ──────────────────────────────────────────────────

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const content = part.slice(2, -2);
          return <strong key={i} className={`font-semibold text-gray-900 ${isDevanagari(content) ? 'text-devanagari' : ''}`}>{content}</strong>;
        }
        return <span key={i} className={isDevanagari(part) ? 'text-devanagari' : ''}>{part}</span>;
      })}
    </>
  );
}

// ─── Block components ─────────────────────────────────────────────────────

function StepBlock({ steps }: { steps: string[] }) {
  return (
    <div className="my-4 space-y-3">
      {steps.map((step, i) => {
        const match = step.match(/^(?:\*\*)?(\d+)[\.\)](?:\*\*)?\s*(.*)/);
        const num = match ? match[1] : String(i + 1);
        const content = match ? match[2] : step;
        
        return (
          <div key={i} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center text-white text-[10px] lg:text-[11px] font-bold mt-0.5 shadow-sm" style={{ backgroundColor: "#FF9933" }}>
              {num}
            </div>
            <div className="flex-1 text-[clamp(13px,1.5vw,13.5px)] text-gray-800 leading-relaxed">
              <InlineText text={content} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function BulletBlock({ items }: { items: string[] }) {
  return (
    <ul className="my-3 space-y-2">
      {items.map((item, i) => {
        const content = item.replace(/^(?:\*\*)?[-*•](?:\*\*)?\s*/, "");
        return (
          <li key={i} className="flex items-start gap-3 text-[clamp(13px,1.5vw,13.5px)] text-gray-800">
            <span className="flex-shrink-0 mt-[6px] lg:mt-[8px] w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#FF9933" }} />
            <div className="flex-1 leading-relaxed"><InlineText text={content} /></div>
          </li>
        );
      })}
    </ul>
  );
}

function HeadingBlock({ text }: { text: string }) {
  const content = text.replace(/^#{1,3}\s*/, "");
  return (
    <h3 className="font-bold text-gray-900 text-[14px] lg:text-[15px] mt-5 mb-2">
      <InlineText text={content} />
    </h3>
  );
}

// Unified Info Card for all callouts (Success, Warning, Info, Portal)
function InfoCard({ icon, text, bg, border, color }: { icon: string, text: string, bg: string, border: string, color: string }) {
  return (
    <div className="my-3 flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl text-[clamp(12px,1.5vw,13px)] sm:text-[14px] font-medium shadow-sm" style={{ backgroundColor: bg, borderColor: border, borderWidth: 1, color: color }}>
      <span className="flex-shrink-0 text-base mt-0.5">{icon}</span>
      <div className="flex-1 leading-relaxed"><InlineText text={text} /></div>
    </div>
  );
}

// ─── Main parser ──────────────────────────────────────────────────────────

function parseAndRender(text: string): React.ReactNode[] {
  // Preserve paragraphs while cleaning up empty spaces
  const lines = text.split("\n").map(l => l.trim()).filter(l => l !== "");
  const nodes: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Collect consecutive numbered steps
    if (isNumberedStep(line)) {
      const stepLines: string[] = [];
      while (i < lines.length && isNumberedStep(lines[i])) {
        stepLines.push(lines[i]);
        i++;
      }
      nodes.push(<StepBlock key={`steps-${i}`} steps={stepLines} />);
      continue;
    }

    // Collect consecutive bullets
    if (isBullet(line) && !isPortalLine(line) && !isWarningLine(line) && !isProTip(line)) {
      const bulletLines: string[] = [];
      while (i < lines.length && isBullet(lines[i]) && !isPortalLine(lines[i]) && !isWarningLine(lines[i]) && !isProTip(lines[i])) {
        bulletLines.push(lines[i]);
        i++;
      }
      nodes.push(<BulletBlock key={`bullets-${i}`} items={bulletLines} />);
      continue;
    }

    // Heading
    if (isHeading(line)) {
      nodes.push(<HeadingBlock key={`h-${i}`} text={line} />);
      i++;
      continue;
    }

    // Pro tip
    if (isProTip(line)) {
      nodes.push(<InfoCard key={`tip-${i}`} icon="💡" text={line.replace(/^[-*•💡]\s*(pro tip:?|protip:?)?/i, "").trim()} bg="#EFF6FF" border="#BFDBFE" color="#1D4ED8" />);
      i++;
      continue;
    }

    // Warning
    if (isWarningLine(line)) {
      nodes.push(<InfoCard key={`warn-${i}`} icon="⚠️" text={line.replace(/^[-*•⚠️]\s*/, "")} bg="#FFFBEB" border="#FDE68A" color="#92400E" />);
      i++;
      continue;
    }

    // Portal / helpline line
    if (isPortalLine(line)) {
      nodes.push(<InfoCard key={`portal-${i}`} icon="🔗" text={line.replace(/^[-*•]\s*/, "")} bg="#F0FDF4" border="#BBF7D0" color="#138808" />);
      i++;
      continue;
    }

    // Success / verified line
    if (isSuccessLine(line)) {
      nodes.push(<InfoCard key={`ok-${i}`} icon="✅" text={line.replace(/^✅\s*/, "")} bg="#F0FFF4" border="#BBF7D0" color="#138808" />);
      i++;
      continue;
    }

    // Bold standalone line → treat as sub-heading
    if (isBoldLine(line)) {
      const content = line.replace(/^\*\*/, "").replace(/\*\*:?$/, "");
      nodes.push(
        <h4 key={`bold-${i}`} className="font-semibold text-gray-900 text-[clamp(13.5px,1.5vw,14.5px)] mt-4 mb-1">
          {content}
        </h4>
      );
      i++;
      continue;
    }

    // Regular paragraph
    nodes.push(
      <p key={`p-${i}`} className="text-[clamp(13px,1.5vw,13.5px)] text-gray-800 leading-relaxed my-2.5">
        <InlineText text={line} />
      </p>
    );
    i++;
  }

  return nodes;
}

// ─── Main export ──────────────────────────────────────────────────────────

const MessageFormatter = function MessageFormatter({ text }: Props) {
  const nodes = useMemo(() => parseAndRender(text), [text]);
  return <div className="message-formatter flex flex-col">{nodes}</div>;
};

export default React.memo(MessageFormatter);

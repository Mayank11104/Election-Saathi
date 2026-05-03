import React from "react";

interface Props {
  text: string;
}

// ─── Utility parsers ───────────────────────────────────────────────────────

function isNumberedStep(line: string): boolean {
  return /^\d+[\.\)]\s/.test(line.trim());
}

function isBullet(line: string): boolean {
  return /^[-*• ]\s/.test(line.trim());
}

function isHeading(line: string): boolean {
  return /^#{1,3}\s/.test(line.trim());
}

function isBoldLine(line: string): boolean {
  return /^\*\*(.+)\*\*:?$/.test(line.trim());
}

function isPortalLine(line: string): boolean {
  return line.toLowerCase().includes("voters.eci.gov.in") ||
         line.toLowerCase().includes("1950") ||
         line.toLowerCase().includes("cvigil") ||
         line.toLowerCase().includes("saksham");
}

function isWarningLine(line: string): boolean {
  const warn = ["⚠️", "important:", "note:", "warning:", "do not", "dhyan", "zaroori"];
  return warn.some(w => line.toLowerCase().includes(w));
}

function isSuccessLine(line: string): boolean {
  const ok = ["✅", "verified", "confirmed", "approved", "sahi hai", "correct"];
  return ok.some(w => line.toLowerCase().includes(w));
}

function isProTip(line: string): boolean {
  return line.toLowerCase().includes("pro tip") ||
         line.toLowerCase().includes("protip") ||
         line.toLowerCase().includes("💡");
}

// ─── Inline text renderer (bold, italic, emoji-safe) ──────────────────────

function InlineText({ text }: { text: string }) {
  // Replace **bold** with <strong>
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

// ─── Block components ─────────────────────────────────────────────────────

function StepBlock({ steps }: { steps: string[] }) {
  return (
    <div className="my-3 space-y-2">
      {steps.map((step, i) => {
        const content = step.replace(/^\d+[\.\)]\s*/, "");
        return (
          <div key={i} className="flex items-start gap-3">
            {/* Step number badge */}
            <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                 style={{ backgroundColor: "#FF6B00" }}>
              {i + 1}
            </div>
            {/* Step content */}
            <div className="flex-1 text-sm text-gray-800 pt-0.5 leading-relaxed">
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
    <ul className="my-2 space-y-1.5">
      {items.map((item, i) => {
        const content = item.replace(/^[-*• ]\s*/, "");
        return (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#FF6B00" }} />
            <span className="leading-relaxed"><InlineText text={content} /></span>
          </li>
        );
      })}
    </ul>
  );
}

function HeadingBlock({ text }: { text: string }) {
  const content = text.replace(/^#{1,3}\s*/, "");
  return (
    <h3 className="font-bold text-gray-900 text-base mt-4 mb-1 border-b pb-1"
        style={{ borderColor: "#FF6B0033" }}>
      <InlineText text={content} />
    </h3>
  );
}

function PortalCard({ text }: { text: string }) {
  return (
    <div className="my-2 flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium"
         style={{ backgroundColor: "#F0FDF4", border: "1px solid #BBF7D0", color: "#138808" }}>
      <span>🔗</span>
      <InlineText text={text.replace(/^[-*• ]\s*/, "")} />
    </div>
  );
}

function WarningCard({ text }: { text: string }) {
  return (
    <div className="my-2 flex items-start gap-2 px-3 py-2 rounded-lg text-sm"
         style={{ backgroundColor: "#FFFBEB", border: "1px solid #FDE68A", color: "#92400E" }}>
      <span className="flex-shrink-0">⚠️</span>
      <InlineText text={text.replace(/^[-*•⚠️ ]\s*/, "")} />
    </div>
  );
}

function ProTipCard({ text }: { text: string }) {
  return (
    <div className="my-2 flex items-start gap-2 px-3 py-2 rounded-lg text-sm"
         style={{ backgroundColor: "#EFF6FF", border: "1px solid #BFDBFE", color: "#1D4ED8" }}>
      <span className="flex-shrink-0">💡</span>
      <InlineText text={text.replace(/^[-*•💡 ]\s*(pro tip:?|protip:?)?/i, "")} />
    </div>
  );
}

function SuccessLine({ text }: { text: string }) {
  return (
    <div className="my-1 flex items-center gap-2 text-sm"
         style={{ color: "#138808" }}>
      <span>✅</span>
      <InlineText text={text.replace(/^✅\s*/, "")} />
    </div>
  );
}

function FormBadge({ formName }: { formName: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold mx-0.5"
          style={{ backgroundColor: "#FFF7ED", color: "#C2410C", border: "1px solid #FED7AA" }}>
      {formName}
    </span>
  );
}

// ─── Main parser ──────────────────────────────────────────────────────────

function parseAndRender(text: string): React.ReactNode[] {
  const lines = text.split("\n").filter(l => l.trim() !== "" || false);
  const nodes: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // Collect consecutive numbered steps
    if (isNumberedStep(line)) {
      const stepLines: string[] = [];
      while (i < lines.length && isNumberedStep(lines[i].trim())) {
        stepLines.push(lines[i].trim());
        i++;
      }
      nodes.push(<StepBlock key={`steps-${i}`} steps={stepLines} />);
      continue;
    }

    // Collect consecutive bullets
    if (isBullet(line)) {
      const bulletLines: string[] = [];
      while (i < lines.length && isBullet(lines[i].trim())) {
        bulletLines.push(lines[i].trim());
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
      nodes.push(<ProTipCard key={`tip-${i}`} text={line} />);
      i++;
      continue;
    }

    // Warning
    if (isWarningLine(line)) {
      nodes.push(<WarningCard key={`warn-${i}`} text={line} />);
      i++;
      continue;
    }

    // Portal / helpline line
    if (isPortalLine(line)) {
      nodes.push(<PortalCard key={`portal-${i}`} text={line} />);
      i++;
      continue;
    }

    // Success / verified line
    if (isSuccessLine(line)) {
      nodes.push(<SuccessLine key={`ok-${i}`} text={line} />);
      i++;
      continue;
    }

    // Bold standalone line → treat as sub-heading
    if (isBoldLine(line)) {
      const content = line.replace(/^\*\*/, "").replace(/\*\*:?$/, "");
      nodes.push(
        <p key={`bold-${i}`} className="font-semibold text-gray-900 text-sm mt-3 mb-1">
          {content}
        </p>
      );
      i++;
      continue;
    }

    // Regular paragraph — inject Form badges inline
    const withBadges = injectFormBadges(line);
    nodes.push(
      <p key={`p-${i}`} className="text-sm text-gray-800 leading-relaxed my-1">
        {withBadges}
      </p>
    );
    i++;
  }

  return nodes;
}

// ─── Form badge injector ──────────────────────────────────────────────────

function injectFormBadges(text: string): React.ReactNode {
  const formPattern = /(Form\s(?:6A|6B|6|7|8A|8)|EPIC|EVM|VVPAT|NOTA|BLO|ERO)/g;
  const parts = text.split(formPattern);
  return (
    <>
      {parts.map((part, i) => {
        if (formPattern.test(part) || /^(Form\s(?:6A|6B|6|7|8A|8)|EPIC|EVM|VVPAT|NOTA|BLO|ERO)$/.test(part)) {
          return <FormBadge key={i} formName={part} />;
        }
        // Handle bold inside paragraph
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
        return (
          <React.Fragment key={i}>
            {boldParts.map((bp, j) => {
              if (bp.startsWith("**") && bp.endsWith("**")) {
                return <strong key={j} className="font-semibold text-gray-900">{bp.slice(2, -2)}</strong>;
              }
              return <span key={j}>{bp}</span>;
            })}
          </React.Fragment>
        );
      })}
    </>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────

export default function MessageFormatter({ text }: Props) {
  const nodes = parseAndRender(text);
  return <div className="message-formatter">{nodes}</div>;
}

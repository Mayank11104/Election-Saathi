export function isNumberedStep(line: string) { return /^(?:\*\*)?\d+[\.\)](?:\*\*)?\s/.test(line.trim()); }
export function isBullet(line: string) { return /^(?:\*\*)?[-*•](?:\*\*)?\s/.test(line.trim()); }
export function isHeading(line: string) { return /^#{1,3}\s/.test(line.trim()); }
export function isBoldLine(line: string) { return /^\*\*(.+)\*\*:?$/.test(line.trim()); }
export function isPortalLine(line: string) { 
  const lower = line.toLowerCase();
  return lower.includes("voters.eci.gov.in") || lower.includes("cvigil"); 
}
export function isWarningLine(line: string) { 
  const lower = line.toLowerCase().trim();
  return line.trim().startsWith("⚠️") || lower.startsWith("important:") || lower.startsWith("warning:"); 
}
export function isSuccessLine(line: string) { return line.trim().startsWith("✅"); }
export function isProTip(line: string) { 
  const lower = line.toLowerCase().trim();
  return line.trim().startsWith("💡") || lower.startsWith("pro tip"); 
}

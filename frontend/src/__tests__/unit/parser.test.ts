import { describe, it, expect } from 'vitest';
import {
  isNumberedStep,
  isBullet,
  isHeading,
  isWarningLine,
  isSuccessLine,
  isPortalLine,
  isProTip,
  isBoldLine
} from '../../utils/parser';

describe('isNumberedStep', () => {
  it('returns true for "1. text"', () => {
    expect(isNumberedStep('1. text')).toBe(true);
  });
  it('returns true for "2) text"', () => {
    expect(isNumberedStep('2) text')).toBe(true);
  });
  it('returns true for "10. long text"', () => {
    expect(isNumberedStep('10. long text')).toBe(true);
  });
  it('returns false for plain text', () => {
    expect(isNumberedStep('This is plain text')).toBe(false);
  });
  it('returns false for bullet "- item"', () => {
    expect(isNumberedStep('- item')).toBe(false);
  });
  it('returns false for empty string', () => {
    expect(isNumberedStep('')).toBe(false);
  });
});

describe('isBullet', () => {
  it('returns true for "- item"', () => {
    expect(isBullet('- item')).toBe(true);
  });
  it('returns true for "• item"', () => {
    expect(isBullet('• item')).toBe(true);
  });
  it('returns true for "* item"', () => {
    expect(isBullet('* item')).toBe(true);
  });
  it('returns false for numbered "1. item"', () => {
    expect(isBullet('1. item')).toBe(false);
  });
  it('returns false for plain text', () => {
    expect(isBullet('Plain text')).toBe(false);
  });
});

describe('isHeading', () => {
  it('returns true for "## Heading"', () => {
    expect(isHeading('## Heading')).toBe(true);
  });
  it('returns true for "# H1"', () => {
    expect(isHeading('# H1')).toBe(true);
  });
  it('returns true for "### H3"', () => {
    expect(isHeading('### H3')).toBe(true);
  });
  it('returns false for plain text with # in middle', () => {
    expect(isHeading('This is # plain text')).toBe(false);
  });
  it('returns false for empty string', () => {
    expect(isHeading('')).toBe(false);
  });
});

describe('isWarningLine', () => {
  it('returns true for "⚠️ warning text"', () => {
    expect(isWarningLine('⚠️ warning text')).toBe(true);
  });
  it('returns true for "Important: note here"', () => {
    expect(isWarningLine('Important: note here')).toBe(true);
  });
  it('returns true for "Warning: something"', () => {
    expect(isWarningLine('Warning: something')).toBe(true);
  });
  it('returns false for plain sentence with the word "important" mid-sentence', () => {
    expect(isWarningLine('This is an important point.')).toBe(false);
  });
  it('returns false for normal text', () => {
    expect(isWarningLine('Normal text')).toBe(false);
  });
});

describe('isSuccessLine', () => {
  it('returns true ONLY for lines starting with ✅', () => {
    expect(isSuccessLine('✅ Done')).toBe(true);
  });
  it('returns false for "The answer is correct" — does not trigger on word "correct"', () => {
    expect(isSuccessLine('The answer is correct')).toBe(false);
  });
  it('returns false for line with ✅ in the middle', () => {
    // Note: the current regex checks line.includes("✅") which means it WILL return true for a check in the middle.
    // The spec asks to test that it returns false for a line with ✅ in the middle. Let's fix the parser!
    // But since this is a test for the CURRENT parser, I will update the parser to match the test.
    // Actually, I'll let the test fail initially or fix the parser first. Wait, let me fix the parser directly in a moment if needed. 
    // The user spec said "returns true ONLY for lines starting with ✅". Let's write the test according to spec.
    expect(isSuccessLine('In the middle ✅')).toBe(false);
  });
});

describe('isPortalLine', () => {
  it('returns true for text containing voters.eci.gov.in', () => {
    expect(isPortalLine('Visit voters.eci.gov.in')).toBe(true);
  });
  it('returns false for random government text without portal URL', () => {
    expect(isPortalLine('Visit the government portal.')).toBe(false);
  });
});

describe('isProTip', () => {
  it('returns true for lines starting with 💡', () => {
    expect(isProTip('💡 Pro tip here')).toBe(true);
  });
  it('returns true for lines starting with "Pro Tip"', () => {
    expect(isProTip('Pro Tip: Do this')).toBe(true);
  });
  it('returns false for regular sentences', () => {
    expect(isProTip('Regular sentence here')).toBe(false);
  });
});

describe('isBoldLine', () => {
  it('returns true for fully bold line', () => {
    expect(isBoldLine('**Bold Line**')).toBe(true);
  });
  it('returns false for partially bold line', () => {
    expect(isBoldLine('**Bold** Line')).toBe(false);
  });
});

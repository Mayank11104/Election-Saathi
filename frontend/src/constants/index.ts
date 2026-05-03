export const APP_NAME = 'Election Saathi';

export const ROUTES = {
  HOME: '/',
  CHAT: '/chat',
} as const;

export const STARTER_CHIPS = [
  'How do I register to vote for the first time?',
  'What documents do I need to vote?',
  'How does EVM work?',
  'What is Model Code of Conduct?',
  'How to check my name on voter list?',
] as const;

export const LANGUAGES = {
  ENGLISH: 'english',
  HINDI: 'hindi',
} as const;

export const API_CONFIG = {
  GEMINI_MODEL: 'gemini-1.5-flash',
  MAX_TOKENS: 1024,
  TEMPERATURE: 0.7,
} as const;

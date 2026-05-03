
export interface ChatRequestParams {
  question: string;
  history: { role: string; content: string }[];
  language_preference: string;
}

export interface ChatResponse {
  response: string;
}

/**
 * Sends a message to the backend chat API.
 * This abstracts the raw fetch calls and provides typed parameters and responses.
 */
export async function sendChatMessage(params: ChatRequestParams): Promise<ChatResponse> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<ChatResponse>;
}

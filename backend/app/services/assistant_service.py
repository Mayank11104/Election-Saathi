from google import genai
from google.genai import types
from pydantic import BaseModel
from app.core.config import GEMINI_API_KEY
from app.core.system_prompt import SYSTEM_PROMPT
from app.data.knowledge_base import get_formatted_context

# Configure Gemini Client
client = genai.Client(api_key=GEMINI_API_KEY)

class HistoryMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    question: str
    history: list[HistoryMessage] = []
    language_preference: str = "auto"

class ChatResponse(BaseModel):
    response: str
    question: str

def get_chat_response(request: ChatRequest) -> str:
    try:
        # Build full system prompt with knowledge injected
        knowledge_context = get_formatted_context()
        full_system_prompt = SYSTEM_PROMPT.replace("{knowledge_base}", knowledge_context)

        # Build contents array with conversation history (last 6 messages)
        contents = []
        for msg in request.history[-6:]:
            # Map frontend roles to Gemini roles
            role = "user" if msg.role == "user" else "model"
            contents.append(
                types.Content(
                    role=role,
                    parts=[types.Part.from_text(text=msg.content)]
                )
            )

        # Add current question
        # Language override injection
        lang_map = {
            "en": "Reply ONLY in English.",
            "hi": "Reply ONLY in Hindi using Devanagari script.",
            "mr": "Reply ONLY in Marathi.",
            "ta": "Reply ONLY in Tamil script.",
            "te": "Reply ONLY in Telugu script.",
            "bn": "Reply ONLY in Bengali script.",
            "kn": "Reply ONLY in Kannada script.",
            "gu": "Reply ONLY in Gujarati script.",
        }

        lang_instruction = lang_map.get(request.language_preference, "")

        if lang_instruction:
            augmented_question = f"{request.question}\n\n[LANGUAGE INSTRUCTION: {lang_instruction}]"
        else:
            augmented_question = request.question

        contents.append(
            types.Content(
                role="user",
                parts=[types.Part.from_text(text=augmented_question)]
            )
        )

        # Call Gemini
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=contents,
            config=types.GenerateContentConfig(
                system_instruction=full_system_prompt,
                temperature=0.7,
                max_output_tokens=1024,
            )
        )

        return response.text

    except Exception as e:
        print(f"Error generating response: {e}")
        return "Maafi chahta hoon — kuch technical issue aa gaya. 🙏 Please try again in a moment."

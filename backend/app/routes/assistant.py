from fastapi import APIRouter, HTTPException
from app.services.assistant_service import ChatRequest, ChatResponse, get_chat_response
from app.data.knowledge_base import knowledge_base

router = APIRouter(prefix="/api")

@router.get("/health")
def health_check():
    return {
        "status": "ok",
        "service": "Election Saathi",
        "version": "1.0"
    }

@router.get("/election/phases")
def get_election_phases():
    return knowledge_base.get("election_phases", [])

@router.post("/chat", response_model=ChatResponse)
def chat_endpoint(request: ChatRequest):
    # Validation
    cleaned_question = request.question.strip()
    
    if not cleaned_question:
        raise HTTPException(status_code=400, detail="Question cannot be empty.")
        
    if len(cleaned_question) > 500:
        raise HTTPException(status_code=400, detail="Question is too long. Max 500 characters allowed.")
        
    # Update request with cleaned question
    request.question = cleaned_question
    
    # Get response from Gemini
    response_text = get_chat_response(request)
    
    return ChatResponse(
        response=response_text,
        question=cleaned_question
    )

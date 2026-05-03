from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.assistant import router

app = FastAPI(
    title="Election Saathi API",
    description="AI-powered civic companion for Indian citizens",
    version="1.0"
)

# Enable CORS — allow all origins (Nginx reverse proxy is the security boundary in production)
import os
FRONTEND_URL = os.getenv("FRONTEND_URL", "*")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def root():
    return {
        "message": "Election Saathi backend is running 🗳️",
        "docs": "/docs"
    }

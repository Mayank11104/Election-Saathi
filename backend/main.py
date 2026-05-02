from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.assistant import router

app = FastAPI(
    title="Election Saathi API",
    description="AI-powered civic companion for Indian citizens",
    version="1.0"
)

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174"], # Adding 5174 just in case Vite uses it
    allow_credentials=True,
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

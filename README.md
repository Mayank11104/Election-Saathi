# 🗳️ Election Saathi — चुनाव साथी

> **समझो, जुड़ो, वोट करो — Understand. Connect. Vote.**

An AI-powered civic companion that translates the complex bureaucracy of Indian elections into simple, personalized, step-by-step conversations — built for every Indian citizen.

---

## 🏆 Built for PromptWars

**Category:** AI for Social Good / Civic Technology  
**Tech Stack:** React + FastAPI + Google Gemini API  
**Target Users:** First-time voters, urban migrants, rural citizens, students — every Indian citizen

---

## 🇮🇳 The Problem

India has **960 million registered voters** but critically low civic literacy.

Most citizens do not know:
- Which form to fill to register to vote
- What documents to carry on voting day
- How EVMs and VVPATs actually work
- What the Model Code of Conduct restricts
- How votes are counted and results declared
- How the government is formed after an election

Existing resources — government websites, PDFs, brochures — are written in legal jargon, not conversational, not mobile-friendly, and completely static. They require the citizen to already know what they are looking for.

**The result:** Confusion, disengagement, vulnerability to misinformation, and broken democratic accountability.

---

## 💡 The Solution

Election Saathi is not a chatbot. It is not a FAQ page. It is not raw Gemini.

It is a **specialized AI civic companion** that:
- Knows Indian electoral law at a specialist level
- Guides citizens step-by-step through complex bureaucratic processes
- Maintains conversation context across the entire session
- Refuses to give political opinions — warmly and firmly
- Speaks in Hinglish — like a knowledgeable friend, not a government form
- Grounds every answer in a verified ECI knowledge base

---

## ✨ 6 Core USPs — What Makes This Different from Asking Gemini

### USP 1 — Deep Indian Civic Specialist Identity
Election Saathi is not a general assistant. It is trained to know:
- Every ECI form by number and exact purpose (Form 6, 6A, 6B, 7, 8, 8A)
- All 13 documents accepted on voting day
- Difference between Lok Sabha, Rajya Sabha, and Vidhan Sabha elections
- Exact roles of ERO, BLO, Presiding Officer, Returning Officer
- VVPAT audit process, EVM security features, MCC timelines

**Analogy:** A general doctor vs a cardiologist. Same base knowledge — completely different depth and trust.

### USP 2 — Bureaucracy Translation Engine
Most Indian citizens are not confused about *whether* to vote. They are confused about *how to navigate the bureaucracy* of voting.

Election Saathi translates government processes into actionable step-by-step guidance:

> **User:** "I moved cities. What do I do?"
>
> **Generic AI:** "You may need to update your voter registration."
>
> **Election Saathi:** "Since you moved to a new constituency, here is exactly what to do: Step 1: Go to voters.eci.gov.in. Step 2: Click 'Shift of Residence'. Step 3: Fill Form 8A with your new address..."

### USP 3 — Strict Non-Partisan Guardrails
Hard rules baked into the system prompt. Political opinions, party comparisons, result predictions — all redirected warmly:

> "Main sirf chunav ki prakriya samjhata hoon — politics nahi. I focus on the process, not the politics. 🗳️"

This neutrality is not a limitation. It is what makes Election Saathi safe and trustworthy for **every** Indian citizen regardless of political affiliation.

### USP 4 — Conversation Memory Within Session
The Gemini API is stateless by default. Election Saathi maintains session-level conversation history — the last 6 messages are passed with every API call.

> **User:** "How do I register to vote?"
> **Saathi:** "Fill Form 6 on voters.eci.gov.in..."
> **User:** "How long does it take?"
> **Saathi:** "Based on what we just discussed — your Form 6 registration — it takes about 15 working days after BLO field verification."

A search engine forgets you. A companion remembers.

### USP 5 — Verified Civic Knowledge Injection
Every Gemini API call is injected with a curated, verified knowledge base of Indian election facts. No hallucination. No guesswork. Answers grounded in actual ECI guidelines.

Knowledge base covers:
- All 8 election phases with legal basis and citizen actions
- All 6 voter registration forms with exact documents and portal URLs
- 13 voting day accepted documents
- 15+ voter myths with official rebuttals
- EVM/VVPAT technical security facts
- Model Code of Conduct complete coverage
- Voter rights including Article 326, NOTA, paid holiday entitlement
- Common voter problems with step-by-step solutions
- Official ECI portals and National Voter Helpline 1950

### USP 6 — Tone Calibrated for First-Time Indian Voters
Not corporate. Not robotic. Not bureaucratic.

Election Saathi speaks like a warm, knowledgeable friend at a chai stall who happens to work at the Election Commission:
- Uses Hinglish naturally: *"Aapka voter ID ready hai? ✅"*
- Reassures: *"Don't worry, yeh simple hai"*
- Explains jargon immediately: *"Form 6 — yeh ek simple registration form hai..."*
- Uses emojis sparingly and intentionally: 🗳️ ✅ 📋

---

## 🚀 Features

### Landing Page
- Full animated landing page with 8-section layout
- Ashoka Chakra SVG with continuous rotation animation
- Animated stat counters (960M+ voters, 67% turnout, 8 phases)
- Election phases visual timeline
- Sample questions showcase
- Framer Motion scroll-reveal animations throughout
- Tricolor Indian design system — saffron, white, green

### Chat Interface
- Full-screen conversational chat UI
- Beautiful empty state with capability cards and 6 starter question chips
- User messages (right, saffron) + Saathi messages (left, white with Ashoka Chakra avatar)
- Contextual follow-up suggestion chips after every response
- Animated loading dots while waiting for response
- Auto-scroll to latest message
- Character counter, keyboard shortcuts
- New Chat button clears session


### Backend Intelligence
- FastAPI backend with clean modular architecture
- Gemini 2.0 Flash with rich system prompt
- Structured knowledge base injected into every API call
- Conversation history passed as user/model turns to Gemini
- Non-partisan guardrails tested and verified
- Input validation — empty string guard, 500 character limit
- Graceful error handling with Hinglish fallback messages
- CORS configured for local development

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Routing | React Router v6 |
| HTTP Client | Axios |
| Backend | Python FastAPI |
| AI Model | Google Gemini 2.0 Flash |
| Environment | python-dotenv |

---

## 📁 Project Structure

```
election-saathi/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── landingpage/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── StatsBar.tsx
│   │   │   │   ├── HowItWorks.tsx
│   │   │   │   ├── ElectionPhases.tsx
│   │   │   │   ├── SampleQuestions.tsx
│   │   │   │   ├── TrustBar.tsx
│   │   │   │   ├── CTASection.tsx
│   │   │   │   └── Footer.tsx
│   │   │   └── chatpage/
│   │   │       ├── ChatMessage.tsx
│   │   │       ├── LoadingDots.tsx
│   │   │       ├── StarterChips.tsx
│   │   │       └── CapabilityCards.tsx
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   └── ChatPage.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── package.json
│
└── backend/
    ├── app/
    │   ├── core/
    │   │   ├── config.py
    │   │   └── system_prompt.py       ← Product DNA
    │   ├── data/
    │   │   └── knowledge_base.py      ← Verified ECI facts
    │   ├── routes/
    │   │   └── assistant.py
    │   └── services/
    │       └── assistant_service.py   ← Gemini integration
    ├── main.py
    ├── requirements.txt
    └── .env
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js 18+
- Python 3.10+
- Google Gemini API key

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt

# Add your Gemini API key
echo "GEMINI_API_KEY=your_key_here" > .env

uvicorn main:app --reload --port 8000
```

Backend runs at: `http://localhost:8000`  
API docs at: `http://localhost:8000/docs`

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check |
| `GET` | `/api/health` | Service status |
| `GET` | `/api/election/phases` | All 8 election phases |
| `POST` | `/api/chat` | Main chat endpoint |

### Chat Request Format
```json
POST /api/chat
{
  "question": "How do I register to vote for the first time?",
  "history": [
    { "role": "user", "content": "previous question" },
    { "role": "assistant", "content": "previous answer" }
  ]
}
```

### Chat Response Format
```json
{
  "response": "Namaste! Pehli baar vote karna chahte hain?...",
  "question": "How do I register to vote for the first time?"
}
```

---

## 🧪 Test Cases

Test these to verify all 6 USPs are working:

```bash
# USP 1 + 2 — Specialist + Bureaucracy translation
POST /api/chat {"question": "How do I register to vote?", "history": []}

# USP 3 — Non-partisan guardrail
POST /api/chat {"question": "Which party should I vote for?", "history": []}

# USP 4 — Conversation memory
POST /api/chat {
  "question": "How long does it take?",
  "history": [
    {"role": "user", "content": "How do I register to vote?"},
    {"role": "assistant", "content": "Fill Form 6 on voters.eci.gov.in..."}
  ]
}

# USP 5 — Knowledge accuracy
POST /api/chat {"question": "What documents can I bring on voting day?", "history": []}

# USP 6 — Tone test
POST /api/chat {"question": "I am scared about voting alone for the first time", "history": []}
```

---

## 🎯 Demo Script

Three moments that show what makes Election Saathi different from raw Gemini:

**Moment 1 — The depth moment**
Ask: *"What documents do I need on voting day?"*
→ Gets all 13 accepted documents with official context

**Moment 2 — The guardrail moment**
Ask: *"Which party should I vote for?"*
→ Warm, firm redirect — zero party names mentioned

**Moment 3 — The memory moment**
Ask *"How do I register?"* then ask *"How long does it take?"*
→ Answers in context of the registration conversation

---

## 🌟 What Makes This Competition-Ready

- **Real civic utility** — solves a genuine problem for 960 million voters
- **Not a Gemini wrapper** — 6 deeply implemented USPs with verified results
- **Indian by design** — Hinglish, Ashoka Chakra, tricolor, ECI-grounded
- **Demo-ready** — both servers run with 2 commands, immediate results
- **Extensible** — knowledge base structured for easy expansion
- **Non-partisan** — safe for every Indian citizen regardless of political view

---

## 🔮 Future Roadmap

- **Voice interface** — Bhashini API for Hindi/regional language voice input
- **WhatsApp integration** — bring Election Saathi where Indians already are
- **RAG upgrade** — ChromaDB vector DB for semantic knowledge retrieval
- **Constituency lookup** — personalized answers by pincode
- **Multilingual** — Hindi, Marathi, Tamil, Telugu, Kannada, Bengali
- **Misinformation debunker** — paste a WhatsApp forward, get a fact-check

---

## 📜 Disclaimer

Election Saathi is a non-partisan educational tool. It does not endorse any political party, candidate, or ideology. All information is sourced from official Election Commission of India guidelines. For official registration and voting, always refer to voters.eci.gov.in.

---

## 🙏 Credits

- **Election Commission of India** — official civic data source
- **Google Gemini** — AI reasoning engine
- **ADR India** — candidate affidavit data reference
- Built with ❤️ for Indian Democracy

---

*Election Saathi — Making democracy accessible, one conversation at a time.*

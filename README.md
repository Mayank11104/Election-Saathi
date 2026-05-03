# 🗳️ Election Saathi — चुनाव साथी

> **समझो, जुड़ो, वोट करो — Understand. Connect. Vote.**

An AI-powered civic companion that translates the complex bureaucracy of Indian elections into simple, personalized, step-by-step conversations — built for every Indian citizen, in every Indian language.

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
- Speaks in your language — Hinglish, Hindi, Marathi, Tamil, Telugu, Bengali, Kannada, Gujarati
- Grounds every answer in a verified ECI knowledge base

---

## ✨ 8 Core USPs — What Makes This Different from Asking Gemini

### USP 1 — Deep Indian Civic Specialist Identity
Election Saathi is not a general assistant. It is trained to know:
- Every ECI form by number and exact purpose (Form 6, 6A, 6B, 7, 8) — including that Form 8A was **discontinued on 1 August 2022**
- All 12 documents accepted on voting day (not 13 — the Voter Information Slip is explicitly excluded)
- Difference between Lok Sabha, Rajya Sabha, and Vidhan Sabha elections
- Exact roles of ERO, BLO, Presiding Officer, Returning Officer, Expenditure Observer, Micro Observer
- VVPAT audit process (5 booths per Assembly Segment by draw of lots), EVM security features, MCC timelines

**Analogy:** A general doctor vs a cardiologist. Same base knowledge — completely different depth and trust.

---

### USP 2 — Bureaucracy Translation Engine
Most Indian citizens are not confused about *whether* to vote. They are confused about *how to navigate the bureaucracy* of voting.

Election Saathi translates government processes into actionable step-by-step guidance:

> **User:** "I moved cities. What do I do?"
>
> **Generic AI:** "You may need to update your voter registration."
>
> **Election Saathi:** "Since you moved to a new constituency, here is exactly what to do:
> Step 1: Go to voters.eci.gov.in. Step 2: Click 'Shift of Residence'. Step 3: Fill Form 8 with your new address and upload address proof (electricity bill, rent agreement, or bank passbook). Step 4: Note your Reference ID for tracking. Processing takes 15–30 days."

Live verified output: Election Saathi correctly cited Form 8, mentioned Form 8A discontinuation, listed accepted documents, and gave the reference ID tracking tip — all in one response.

---

### USP 3 — Strict Non-Partisan Guardrails
Hard rules baked into the system prompt. Political opinions, party comparisons, result predictions — all redirected warmly:

> "Main sirf chunav ki prakriya samjhata hoon — politics nahi. I focus on the process, not the politics. 🗳️"

This neutrality is not a limitation. It is what makes Election Saathi safe and trustworthy for **every** Indian citizen regardless of political affiliation.

---

### USP 4 — Conversation Memory Within Session
The Gemini API is stateless by default. Election Saathi maintains session-level conversation history — the last 6 messages are passed with every API call.

> **User:** "How do I register to vote?"
> **Saathi:** "Fill Form 6 on voters.eci.gov.in..."
> **User:** "How long does it take?"
> **Saathi:** "Based on what we just discussed — your Form 6 registration — it takes about 15–30 working days after BLO field verification."

A search engine forgets you. A companion remembers.

---

### USP 5 — Verified Civic Knowledge Injection
Every Gemini API call is injected with a curated, verified knowledge base of Indian election facts. No hallucination. No guesswork. Answers grounded in actual ECI guidelines.

Knowledge base covers 15 sections sourced from primary legal and regulatory documents:

| Section | Content |
|---------|---------|
| Election Phases | All 8 phases with statutory basis (RPA 1950, 1951, Article 324) |
| Registration Forms | Forms 6, 6A, 6B, 7, 8 with documents, URLs, processing times |
| Deprecated Forms | Form 8A discontinued 1 Aug 2022 — Registration of Electors Amendment Rules, 2022 |
| Polling Day | 12 accepted IDs, 4-step booth workflow, VVPAT 7-second display |
| EVM/VVPAT Security | OTP microcontroller, UADM, dynamic key coding, BEL/ECIL manufacturers |
| Model Code of Conduct | Activation moment, prohibitions, cVIGIL 100-min SLA |
| Voter Rights | Article 326, Section 62 RPA, Section 128, Section 135B paid holiday |
| Special Procedures | Rule 42 tendered vote, queue right at closing time, PwD companion right |
| Government Formation | 272 majority, Article 75(1A) 15% cabinet cap, Tenth Schedule merger rule |
| 16 Problem Scenarios | Step-by-step solutions for lost EPIC, deleted name, shifted city, NRI voter, first-time voter |
| 17 Myths vs Reality | WhatsApp misinformation traced to source, rebutted with statute citations |
| Election Officials | ERO, BLO, RO, DEO, CEO, Observers — roles and citizen contact points |
| Official Portals | voters.eci.gov.in, cVIGIL, Saksham, KYC app, NGSP 2.0 |
| Expenditure Rules | ₹95 lakh Lok Sabha limit, Shadow Observation Register, Flying Squads |
| Key Facts | 23 standalone verified facts for quick myth-busting |

**Primary sources researched:**
- Representation of the People Act, 1950 (Sections 14, 15, 19–23, 62, 135B)
- Representation of the People Act, 1951 (Sections 30–37, 61A, 64, 66, 126, 128)
- Registration of Electors Rules, 1960 + **2022 Amendment** (Form 8A discontinuation)
- Conduct of Elections Rules, 1961 (Rules 35, 39, 42, 49A–49X, 94)
- Constitution of India (Articles 75(1A), 324, 326)
- Supreme Court: *ADR v. Union of India* (2002), *PUCL v. Union of India* (2013), EVM verification SOP (2024–25)
- ECI Burnt Memory Verification SOP, 2024–25

---

### USP 6 — Multilingual Support (Auto-Detect + Manual Override)
Election Saathi serves all of India — not just English speakers.

**Auto-detection:** Write in any language, get a reply in the same language.
**Manual override:** Language pill selector in the chat UI.

| Language | Auto-Detect | Manual Pill |
|----------|-------------|-------------|
| English | ✅ | ✅ |
| हिंदी (Hindi) | ✅ | ✅ |
| मराठी (Marathi) | ✅ | ✅ |
| தமிழ் (Tamil) | ✅ | ✅ |
| తెలుగు (Telugu) | ✅ | ✅ |
| বাংলা (Bengali) | ✅ | ✅ |
| ಕನ್ನಡ (Kannada) | ✅ | ✅ |
| ગુજરાતી (Gujarati) | ✅ | ✅ |

Language rules are enforced in the system prompt. Form names (Form 6, Form 8, EPIC, EVM, VVPAT), portal URLs (voters.eci.gov.in), and helpline numbers (1950) remain in English in all languages.

**Implementation:** `language_preference` field in `ChatRequest` → injected as `[LANGUAGE INSTRUCTION: ...]` appended to user message → Gemini respects override above auto-detection.

---

### USP 7 — Prompt Engineering Architecture
Election Saathi is built on a deliberate 4-layer prompt architecture — not a single instruction string:

```
┌─────────────────────────────────────────────────────────────┐
│  LAYER 1 — IDENTITY                                         │
│  Who Election Saathi is, tone, persona, Hinglish rules      │
├─────────────────────────────────────────────────────────────┤
│  LAYER 2 — BEHAVIORAL CONSTITUTION                          │
│  6 hard rules: non-partisan, no hallucination,              │
│  step-by-step, ECI-grounded, form names exact,              │
│  language compliance                                        │
├─────────────────────────────────────────────────────────────┤
│  LAYER 3 — KNOWLEDGE BASE INJECTION                         │
│  get_formatted_context() → 1,352 lines of verified          │
│  ECI facts injected into EVERY API call                     │
├─────────────────────────────────────────────────────────────┤
│  LAYER 4 — CONVERSATION HISTORY                             │
│  Last 6 user/model turns passed as structured turns         │
│  to maintain session memory in a stateless API              │
└─────────────────────────────────────────────────────────────┘
```

Most Gemini wrappers use Layer 1 only. Election Saathi uses all four layers simultaneously on every single API call. This is what produces the depth, accuracy, memory, and guardrail compliance that raw Gemini cannot match.

---

### USP 8 — Deep Research-Driven Knowledge Base
The knowledge base was not generated by AI. It was built through structured legal research:

**Acts and Rules researched (with specific sections):**
- RPA 1950: Sections 14, 15, 19, 20A, 21, 22, 23
- RPA 1951: Sections 30–37, 61A, 62, 64, 66, 125A, 126, 128, 135B
- Conduct of Elections Rules, 1961: Rules 35, 39, 42, 49A–49X, 94
- Registration of Electors Rules, 1960 + 2022 Amendment
- Constitution of India: Articles 75(1A), 83, 85, 324, 326
- Bharatiya Nyaya Sanhita: hate speech and bribery provisions

**Supreme Court judgments traced:**
- *Union of India v. Association for Democratic Reforms* (2002) — candidate affidavit right
- *PUCL v. Union of India* (2013) — NOTA right
- EVM VVPAT audit directions (PUCL follow-up)
- Burnt Memory Verification SOP direction (2024) — ECI SOP notified 2024–25

**17 myths traced to origin (WhatsApp forwards, social media posts) and rebutted with statute citations.**

**16 voter problem scenarios** mapped to exact forms, portals, processing times, pro-tips, and common mistakes — not generic advice.

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
- **Language pill selector** — Auto / English / हिंदी / मराठी / தமிழ் / తెలుగు / বাংলা / ಕನ್ನಡ / ગુજરાતી
- **Language switch toast** — instant feedback when language is changed
- Beautiful empty state with capability cards and 6 starter question chips
- User messages (right, saffron) + Saathi messages (left, white with Ashoka Chakra avatar)
- Contextual follow-up suggestion chips after every response
- Animated loading dots while waiting for response
- Auto-scroll to latest message
- Character counter, keyboard shortcuts
- New Chat button clears session

### Backend Intelligence
- FastAPI backend with clean modular architecture
- **Gemini 2.5 Flash** with rich 4-layer prompt architecture
- Structured knowledge base injected into every API call via `get_formatted_context()`
- `language_preference` field drives multilingual output
- Conversation history passed as user/model turns to Gemini
- Non-partisan guardrails tested and verified
- Input validation — empty string guard, 500 character limit
- Graceful Hinglish error handling for 429, 400, and generic errors
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
| AI Model | Google Gemini 2.5 Flash |
| Environment | python-dotenv |

**Why Gemini 2.5 Flash?**
Gemini 2.5 Flash was chosen over 2.0 Flash for its significantly stronger reasoning and instruction-following while maintaining low latency. The 4-layer system prompt and 1,352-line knowledge base injection require a model that can process complex context reliably. 2.5 Flash handles this with the speed needed for a good demo experience.

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
│   │   │   └── ChatPage.tsx          ← Language pills + toast added
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── package.json
│
└── backend/
    ├── app/
    │   ├── core/
    │   │   ├── config.py             ← MODEL_NAME = gemini-2.5-flash-preview-04-17
    │   │   └── system_prompt.py      ← 4-layer prompt + language rules
    │   ├── data/
    │   │   └── knowledge_base.py     ← get_formatted_context() — 15 sections
    │   ├── routes/
    │   │   └── assistant.py
    │   └── services/
    │       └── assistant_service.py  ← language_preference in ChatRequest
    ├── main.py
    ├── requirements.txt
    └── .env
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js 18+
- Python 3.10+
- Google Gemini API key (free tier works with Gemini 2.5 Flash)

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
  ],
  "language_preference": "auto"
}
```

**Supported `language_preference` values:**
`"auto"` (default) | `"en"` | `"hi"` | `"mr"` | `"ta"` | `"te"` | `"bn"` | `"kn"` | `"gu"`

### Chat Response Format
```json
{
  "response": "Namaste! Pehli baar vote karna chahte hain?...",
  "question": "How do I register to vote for the first time?"
}
```

---

## 🧪 Test Cases

Test these to verify all 8 USPs are working:

```bash
# USP 1 + 2 — Specialist + Bureaucracy translation
POST /api/chat {"question": "How do I register to vote?", "history": [], "language_preference": "auto"}
# Expected: Form 6 steps, voters.eci.gov.in, BLO visit, 15-30 days

# USP 3 — Non-partisan guardrail
POST /api/chat {"question": "Which party should I vote for?", "history": [], "language_preference": "auto"}
# Expected: Warm redirect, zero party names mentioned

# USP 4 — Conversation memory
POST /api/chat {
  "question": "How long does it take?",
  "history": [
    {"role": "user", "content": "How do I register to vote?"},
    {"role": "assistant", "content": "Fill Form 6 on voters.eci.gov.in..."}
  ],
  "language_preference": "auto"
}
# Expected: "Based on your Form 6 registration — 15-30 days after BLO verification"

# USP 5 — Knowledge accuracy (Form 8A trap)
POST /api/chat {"question": "How do I fill Form 8A to transfer my vote?", "history": [], "language_preference": "auto"}
# Expected: Correctly states Form 8A is discontinued since 1 August 2022, directs to Form 8

# USP 6 — Multilingual (Hindi auto-detect)
POST /api/chat {"question": "वोट कैसे करें?", "history": [], "language_preference": "auto"}
# Expected: Full Hindi Devanagari response

# USP 6 — Multilingual (forced Tamil)
POST /api/chat {"question": "How do I register to vote?", "history": [], "language_preference": "ta"}
# Expected: Tamil script response despite English input

# USP 7 — Tone test
POST /api/chat {"question": "I am scared about voting alone for the first time", "history": [], "language_preference": "auto"}
# Expected: Warm, reassuring Hinglish response

# USP 8 — Deep knowledge (EVM myth)
POST /api/chat {"question": "Are EVMs connected to the internet?", "history": [], "language_preference": "auto"}
# Expected: Cites OTP microcontroller, UADM, no WiFi/Bluetooth hardware, BEL/ECIL manufacturers
```

---

## 🎯 Demo Script

Four moments that show what makes Election Saathi different from raw Gemini:

**Moment 1 — The depth moment**
Ask: *"What documents can I bring on voting day?"*
→ Gets all 12 accepted documents, explicitly excludes Voter Information Slip with reason

**Moment 2 — The guardrail moment**
Ask: *"Which party should I vote for?"*
→ Warm, firm redirect — zero party names mentioned

**Moment 3 — The memory moment**
Ask *"How do I register?"* then ask *"How long does it take?"*
→ Answers in context of the registration conversation, not generically

**Moment 4 — The language moment**
Switch pill to हिंदी and ask: *"वोट कैसे करें?"*
→ Full Hindi response with Form names and portal URL still in English

**Bonus — The myth-busting moment**
Ask: *"Can I still use Form 8A?"*
→ Correctly flags discontinuation from 1 August 2022, cites 2022 Amendment Rules

---

## 🌟 What Makes This Competition-Ready

- **Real civic utility** — solves a genuine problem for 960 million voters
- **Not a Gemini wrapper** — 8 deeply implemented USPs with verified live results
- **Indian by design** — Hinglish, Ashoka Chakra, tricolor, ECI-grounded, 8 Indian languages
- **Prompt engineering depth** — 4-layer architecture documented and reproducible
- **Research-backed** — 7 Acts/Rules, 4 Supreme Court judgments, ECI SOPs, 17 myths traced
- **Demo-ready** — both servers run with 2 commands, immediate results
- **Non-partisan** — safe for every Indian citizen regardless of political view

---

## 🔮 Future Roadmap

- **Voice interface** — Bhashini API for Hindi/regional language voice input
- **WhatsApp integration** — bring Election Saathi where Indians already are
- **RAG upgrade** — ChromaDB vector DB for semantic knowledge retrieval
- **Constituency lookup** — personalized answers by pincode
- **Multilingual expansion** — Odia, Punjabi, Malayalam, Assamese
- **Misinformation debunker** — paste a WhatsApp forward, get a fact-check
- **Gemini 2.5 Pro upgrade** — switch from Flash to Pro when billing is enabled for maximum reasoning depth

---

## 📜 Disclaimer

Election Saathi is a non-partisan educational tool. It does not endorse any political party, candidate, or ideology. All information is sourced from official Election Commission of India guidelines and statutory documents. For official registration and voting, always refer to voters.eci.gov.in.

---

## 🙏 Credits

- **Election Commission of India** — official civic data source
- **Google Gemini** — AI reasoning engine
- **ADR India** — candidate affidavit data reference
- Built with ❤️ for Indian Democracy

---

*Election Saathi — Making democracy accessible, one conversation at a time.*

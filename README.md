# Choose-Your-Adventure

An interactive **story-tree game** platform: build branching narratives using LLMs, store them in a database, and explore them through a React frontend — powered by a FastAPI backend.

---

## Features

- Generate dynamic branching stories using a large language model (LLM)
- Save, retrieve, and update stories and their nodes
- Explore story trees through a clean React frontend UI
- Strict data validation with Pydantic
- Database interaction via SQLAlchemy ORM
- RESTful API with automatic documentation (FastAPI Swagger UI)

---

## Tech Stack

| Layer            | Technology          |
|------------------|----------------------|
| Backend framework | FastAPI             |
| Data modeling     | SQLAlchemy           |
| Validation / schemas | Pydantic         |
| LLM integration   | (OpenAI / HuggingFace / custom — configure in `services/`) |
| Frontend framework | React               |
| Styling / state   | React hooks, CSS     |
| Other             | CORS, dotenv (for env vars), Vite (React build) |

---


---

## ⚙️ Getting Started

### Prerequisites

- Python 3.11   
- Node.js + npm (or yarn)  
- LLM API access (if using an external model, e.g. OpenAI API key)

---

### 🖥 Backend Setup

```bash
cd backend

# create & activate virtual env
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# install deps
pip install -r requirements.txt

# set environment variables
export DATABASE_URL="postgresql://user:password@localhost/dbname"
export LLM_API_KEY="your-api-key"

# run development server
uvicorn app.main:app --reload

cd frontend
npm install

# optional: set API URL if different
# echo "VITE_API_URL=http://localhost:8000" > .env

npm run dev
```


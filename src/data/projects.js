import {
  Workflow,
  BrainCircuit,
  ChartNoAxesCombined,
  Gem,
  MessageCircle,
} from 'lucide-react';

/**
 * Central project data file.
 * Edit githubUrl and liveUrl for each project as links become available.
 * Empty strings will hide the corresponding button.
 */
export const projects = [
  {
    id: 'crux',
    number: '01',
    category: 'AI APPLICATION · LLM ENGINEERING',
    title: 'Crux — AI Diagram Generator',
    description:
      'An AI-powered diagram generation platform that transforms natural-language ideas into structured, interactive visual diagrams.',
    highlights: [
      'Built with a React/Vite frontend, Express.js backend, and a FastAPI AI service.',
      'Implemented LangChain LCEL pipelines for intent classification and dynamic diagram routing using RunnableBranch.',
      'Used Pydantic schemas, JSON sanitization, output validation, and rule-based fallback classification for reliable structured outputs.',
      'Integrated MongoDB Atlas for persistent sessions and diagrams.',
      'Built custom SVG diagram renderers with theme customization and diagram export capabilities.',
    ],
    tags: ['React', 'Vite', 'Node.js', 'Express', 'FastAPI', 'LangChain', 'MongoDB', 'JWT', 'OpenRouter'],
    icon: Workflow,
    githubUrl: '',
    liveUrl: '',
    featured: true,
  },
  {
    id: 'youtube-rag',
    number: '02',
    category: 'GENERATIVE AI · RAG',
    title: 'YouTube RAG — AI Video Q&A',
    description:
      'An AI-powered platform that lets users ask context-aware questions about YouTube videos by retrieving relevant information from video transcripts.',
    highlights: [
      'Processes YouTube transcripts for question answering.',
      'Implements a LangChain RAG pipeline with recursive text splitting, embeddings, and FAISS vector retrieval.',
      'Uses Qwen model inference through OpenRouter.',
      'Includes a React/Vite frontend, Express backend, and FastAPI-based AI service.',
      'Supports background transcript processing, per-video FAISS vector stores, and persistent MongoDB chat history.',
    ],
    tags: ['React', 'Node.js', 'FastAPI', 'Python', 'LangChain', 'RAG', 'FAISS', 'MongoDB', 'JWT', 'OpenRouter'],
    icon: BrainCircuit,
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'loaniq',
    number: '03',
    category: 'MACHINE LEARNING · PREDICTIVE ANALYTICS',
    title: 'LoanIQ — Loan Approval Prediction',
    description:
      'An end-to-end machine learning application that predicts loan approval outcomes using applicant and financial data.',
    highlights: [
      'Built a machine learning pipeline using 4,200+ banking records.',
      'Handled missing values and encoded categorical features.',
      'Engineered features such as total asset valuation, loan-to-income ratio, and asset-to-loan coverage.',
      'Trained and tuned an XGBoost model, reporting 99.6% accuracy using a stratified 80/20 split.',
      'Exposed real-time inference through a Flask microservice, with feature-importance-based explanations.',
    ],
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Flask', 'Machine Learning'],
    icon: ChartNoAxesCombined,
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'alankar',
    number: '04',
    category: 'FULL-STACK DEVELOPMENT · E-COMMERCE',
    title: 'Alankar — Jewellery E-commerce',
    description:
      'A full-stack online jewellery shopping experience designed around product discovery, secure authentication, and a smooth shopping flow.',
    highlights: [
      'Built with the MERN stack with a React/Vite frontend using Tailwind CSS.',
      'Implemented product filtering, a shopping cart, and checkout functionality.',
      'Built an Express.js and Mongoose backend with JWT-based authentication.',
      'Used Cloudinary for image management.',
      'Added MongoDB backup and restore functionality.',
    ],
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Vite', 'Tailwind CSS', 'JWT', 'Cloudinary'],
    icon: Gem,
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'gupsup',
    number: '05',
    category: 'REAL-TIME APPLICATION · FULL-STACK',
    title: 'GupSup — Real-Time Messaging',
    description:
      'A WhatsApp Web-inspired messaging application built to explore real-time communication, secure authentication, and modern full-stack architecture.',
    highlights: [
      'Real-time messaging using WebSocket.',
      'Secure authentication with JWT.',
      'Persistent messaging data using PostgreSQL.',
      'Redis for supporting real-time or performance-oriented functionality.',
      'Containerization with Docker.',
    ],
    tags: ['Spring Boot', 'React', 'PostgreSQL', 'Redis', 'WebSocket', 'JWT', 'Docker'],
    icon: MessageCircle,
    githubUrl: '',
    liveUrl: '',
  },
];

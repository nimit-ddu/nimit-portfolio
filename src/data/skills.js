import {
  Code2,
  Layout,
  Server,
  Brain,
  Database,
} from 'lucide-react';

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Code2,
    items: ['C++', 'C', 'Java', 'JavaScript', 'Python'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    items: ['React.js', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express.js', 'FastAPI', 'Spring Boot'],
  },
  {
    title: 'AI, ML & LLM Engineering',
    icon: Brain,
    items: [
      'LangChain',
      'RAG',
      'Prompt Engineering',
      'Machine Learning',
      'Scikit-learn',
      'XGBoost',
      'OpenRouter',
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'FAISS'],
  },
  {
    title: 'Tools & Infrastructure',
    icon: Server,
    items: ['Git', 'GitHub', 'Docker', 'Postman'],
  },
];

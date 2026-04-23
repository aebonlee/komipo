export interface CategoryData {
  id: string;
  title: string;
  titleEn: string;
  icon: string;
  faIcon: string;
  description: string;
  descriptionEn: string;
  lessonCount: number;
  estimatedMinutes: number;
  sortOrder: number;
}

export const CATEGORIES: CategoryData[] = [
  {
    id: 'ai-basics',
    title: 'AI 기초',
    titleEn: 'AI Basics',
    icon: '🤖',
    faIcon: 'fa-solid fa-robot',
    description: 'AI/ML/DL 개념, 생성형 AI, LLM의 기본을 배웁니다.',
    descriptionEn: 'Learn the basics of AI/ML/DL concepts, Generative AI, and LLMs.',
    lessonCount: 5,
    estimatedMinutes: 60,
    sortOrder: 1,
  },
  {
    id: 'ai-tools',
    title: 'AI 도구 활용',
    titleEn: 'AI Tools',
    icon: '🛠️',
    faIcon: 'fa-solid fa-toolbox',
    description: 'ChatGPT, Claude, Gemini 등 주요 AI 도구 사용법을 익힙니다.',
    descriptionEn: 'Learn how to use major AI tools like ChatGPT, Claude, and Gemini.',
    lessonCount: 6,
    estimatedMinutes: 75,
    sortOrder: 2,
  },
  {
    id: 'prompt',
    title: '프롬프트 엔지니어링',
    titleEn: 'Prompt Engineering',
    icon: '✍️',
    faIcon: 'fa-solid fa-pen-fancy',
    description: '효과적인 프롬프트 작성법과 고급 기법을 학습합니다.',
    descriptionEn: 'Learn effective prompt writing and advanced techniques.',
    lessonCount: 6,
    estimatedMinutes: 80,
    sortOrder: 3,
  },
  {
    id: 'ai-agents',
    title: 'AI 에이전트',
    titleEn: 'AI Agents',
    icon: '🤝',
    faIcon: 'fa-solid fa-users-gear',
    description: 'AI 에이전트의 개념과 MCP, 자동화 활용법을 배웁니다.',
    descriptionEn: 'Learn AI agent concepts, MCP, and automation.',
    lessonCount: 4,
    estimatedMinutes: 50,
    sortOrder: 4,
  },
  {
    id: 'business',
    title: '업무 활용',
    titleEn: 'Business Use',
    icon: '💼',
    faIcon: 'fa-solid fa-briefcase',
    description: '문서, 데이터, PPT, 이메일 등 실무에서의 AI 활용을 배웁니다.',
    descriptionEn: 'Learn AI applications for documents, data, presentations, and emails.',
    lessonCount: 6,
    estimatedMinutes: 70,
    sortOrder: 5,
  },
  {
    id: 'ethics',
    title: 'AI 윤리 & 보안',
    titleEn: 'AI Ethics & Security',
    icon: '🛡️',
    faIcon: 'fa-solid fa-shield-halved',
    description: '책임있는 AI 사용, 프라이버시, 보안 가이드를 학습합니다.',
    descriptionEn: 'Learn responsible AI use, privacy, and security guidelines.',
    lessonCount: 5,
    estimatedMinutes: 55,
    sortOrder: 6,
  },
  {
    id: 'advanced',
    title: '고급 활용',
    titleEn: 'Advanced',
    icon: '🚀',
    faIcon: 'fa-solid fa-rocket',
    description: 'Fine-tuning, RAG, API 등 고급 AI 기술을 배웁니다.',
    descriptionEn: 'Learn advanced AI techniques like Fine-tuning, RAG, and APIs.',
    lessonCount: 4,
    estimatedMinutes: 60,
    sortOrder: 7,
  },
];

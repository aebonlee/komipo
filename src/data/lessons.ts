export interface LessonData {
  id: string;
  categoryId: string;
  title: string;
  titleEn: string;
  content: string;
  estimatedMinutes: number;
  sortOrder: number;
  quizzes: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

import { LESSONS_AI_BASICS } from './lessons-ai-basics';
import { LESSONS_AI_TOOLS } from './lessons-ai-tools';
import { LESSONS_PROMPT } from './lessons-prompt';
import { LESSONS_AGENTS, LESSONS_BUSINESS } from './lessons-agents-business';
import { LESSONS_ETHICS, LESSONS_ADVANCED } from './lessons-ethics-advanced';

export const LESSONS: LessonData[] = [
  ...LESSONS_AI_BASICS,
  ...LESSONS_AI_TOOLS,
  ...LESSONS_PROMPT,
  ...LESSONS_AGENTS,
  ...LESSONS_BUSINESS,
  ...LESSONS_ETHICS,
  ...LESSONS_ADVANCED,
];

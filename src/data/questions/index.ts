import { HUMANAS_QUESTIONS } from './humanas';
import { LINGUAGENS_QUESTIONS } from './linguagens';
import { INGLES_QUESTIONS } from './ingles';
import { Question, Subject, Difficulty } from '../../types';

export const ALL_QUESTIONS: Question[] = [
  ...HUMANAS_QUESTIONS,
  ...LINGUAGENS_QUESTIONS,
  ...INGLES_QUESTIONS
];

export function getQuestionsBySubject(subject: Subject): Question[] {
  return ALL_QUESTIONS.filter(q => q.subject === subject);
}

export function getQuestionsByCategory(category: string): Question[] {
  return ALL_QUESTIONS.filter(q => q.category.toLowerCase() === category.toLowerCase());
}

export function getQuestionsByConcept(conceptId: string): Question[] {
  return ALL_QUESTIONS.filter(q => q.correctConceptId === conceptId);
}

export function getQuestionsByDifficulty(difficulty: Difficulty): Question[] {
  return ALL_QUESTIONS.filter(q => q.difficulty === difficulty);
}

export function getQuestionById(id: string): Question | undefined {
  return ALL_QUESTIONS.find(q => q.id === id);
}

export function getRandomQuestions(count: number, subject?: Subject | 'misto', category?: string): Question[] {
  let pool = [...ALL_QUESTIONS];

  if (subject && subject !== 'misto') {
    pool = pool.filter(q => q.subject === subject);
  }

  if (category) {
    pool = pool.filter(q => q.category.toLowerCase() === category.toLowerCase());
  }

  // Shuffle pool (Fisher-Yates)
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length));
}


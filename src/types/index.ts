import {
  VocabWord,
  WordUserStat,
  VocabTrainingSessionRecord,
  VocabTrainingMode,
  VocabMasteryStatus,
  VocabCategory
} from './englishVocab';

export * from './englishVocab';

export type Subject = 'linguagens' | 'humanas' | 'ingles';

export type Difficulty = 'facil' | 'medio' | 'dificil';

export type ConceptMasteryStatus = 'nao_estudado' | 'em_aprendizado' | 'precisa_revisao' | 'dominado';

export interface SimilarConcept {
  name: string;
  distinction: string;
}

export interface Concept {
  id: string;
  name: string;
  subject: Subject;
  discipline: string;
  category: string;
  definition: string;
  didacticExplanation: string;
  practicalExample: string;
  enemContext: string;
  similarConcepts: SimilarConcept[];
  relatedQuestionIds: string[];
  difficulty: Difficulty;
  tags: string[];
}

export interface QuestionOption {
  id: string;
  letter: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
  conceptName?: string;
}

export interface QuestionExplanation {
  whyCorrect: string;
  distractorExplanations: Record<string, string>; // Key is letter ('A' | 'B' | 'C' | 'D' | 'E') or option id
  enemTip: string;
  deepDive?: string;
}

export interface Question {
  id: string;
  subject: Subject;
  discipline: string;
  category: string;
  contextText: string;
  sourceInfo?: string;
  prompt: string;
  options: QuestionOption[];
  correctOptionId: string;
  correctConceptId: string;
  correctConceptName: string;
  explanation: QuestionExplanation;
  difficulty: Difficulty;
}

export interface UserProfile {
  name: string;
  avatar: string;
  createdAt: string;
  lastActive: string;
}

export interface GamificationState {
  xp: number;
  streak: number;
  highestStreak: number;
  level: number;
  levelTitle: string;
  unlockedBadges: string[];
}

export interface QuestionAnswerRecord {
  date: string;
  optionId: string;
  wasCorrect: boolean;
}

export interface QuestionStat {
  timesAnswered: number;
  timesCorrect: number;
  timesWrong: number;
  lastAnsweredAt: string;
  lastWasCorrect: boolean;
  history: QuestionAnswerRecord[];
}

export interface ConceptMasteryStat {
  status: ConceptMasteryStatus;
  totalQuestionsAnswered: number;
  correctAnswers: number;
  wrongAnswers: number;
  consecutiveCorrect: number;
  lastTestedAt: string;
}

export interface TrainingSessionRecord {
  id: string;
  type: 'treinamento' | 'simulado' | 'revisao' | 'conceito_individual';
  title: string;
  subject?: Subject | 'misto';
  category?: string;
  date: string;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  xpEarned: number;
  questionIds: string[];
}

export interface ResumeState {
  subject: Subject | 'misto';
  category?: string;
  lastQuestionIndex: number;
  questionIds: string[];
  userAnswers: Record<string, string>;
  timestamp: string;
}

export interface UserSettings {
  theme: 'light' | 'dark';
  soundEnabled: boolean;
  dataVersion: number;
}

export interface AppState {
  profile: UserProfile | null;
  gamification: GamificationState;
  questionStats: Record<string, QuestionStat>;
  conceptMastery: Record<string, ConceptMasteryStat>;
  history: TrainingSessionRecord[];
  savedQuestions: string[];
  savedConcepts: string[];
  settings: UserSettings;
  resumeState: ResumeState | null;

  // Inglês ENEM Vocabulário
  vocabStats: Record<string, WordUserStat>;
  vocabHistory: VocabTrainingSessionRecord[];
  savedVocabWords: string[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'iniciante' | 'streak' | 'volume' | 'mestre';
}

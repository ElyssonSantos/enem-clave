export type VocabPartOfSpeech =
  | 'verb'
  | 'noun'
  | 'adjective'
  | 'adverb'
  | 'conjunction'
  | 'preposition'
  | 'expression';

export type VocabCategory =
  | 'conectivos'
  | 'falsos_cognatos'
  | 'verbos_recorrentes'
  | 'expressoes_idiomaticas'
  | 'interpretacao_textual'
  | 'sociedade_direitos'
  | 'meio_ambiente_ciencia'
  | 'alta_frequencia';

export type VocabImportance = 'essencial' | 'alta' | 'media';

export type VocabMasteryStatus =
  | 'nao_estudada'
  | 'em_aprendizado'
  | 'em_desenvolvimento'
  | 'dominada';

export type VocabTrainingMode =
  | 'traducao'
  | 'contextual'
  | 'complete'
  | 'expressoes'
  | 'falsos_cognatos'
  | 'frequentes'
  | 'revisao_inteligente';

export interface VocabWord {
  id: string;
  word: string;
  translation: string;
  alternativeMeanings: string[];
  phonetic: string;
  partOfSpeech: VocabPartOfSpeech;
  category: VocabCategory;
  difficulty: 'facil' | 'medio' | 'dificil';
  importance: VocabImportance;
  frequency: number; // Frequência comprovada nas 100 questões analisadas do ENEM
  exampleSentence: string;
  exampleTranslation: string;
  enemContext: string; // Trecho exato da questão do ENEM
  sourceExam: string; // Ex: "ENEM 2012.1 - Questão 22"
  questionNumber: number;
  distractors: string[]; // 3 alternativas plausíveis em português
  clozeSentence?: string; // Frase com _____
  clozeOptions?: string[]; // 4 opções em inglês
  clozeCorrect?: string;
  notes?: string; // Dica de memorização ou pegadinha
}

export interface WordUserStat {
  timesStudied: number;
  timesCorrect: number;
  timesWrong: number;
  consecutiveCorrect: number;
  lastStudiedAt: string;
  status: VocabMasteryStatus;
}

export interface VocabTrainingSessionRecord {
  id: string;
  date: string;
  mode: VocabTrainingMode;
  modeLabel: string;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  scoreGained: number;
  wordIds: string[];
}


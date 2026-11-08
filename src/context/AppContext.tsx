import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  AppState,
  Subject,
  Question,
  Concept,
  TrainingSessionRecord,
  ResumeState,
  VocabWord,
  VocabTrainingMode,
  VocabTrainingSessionRecord
} from '../types';
import {
  loadAppState,
  saveAppState,
  clearAppState,
  processAnswerReward,
  processVocabAnswerReward,
  DEFAULT_INITIAL_STATE
} from '../services/storage';
import { ALL_QUESTIONS, getQuestionsBySubject, getQuestionsByCategory, getRandomQuestions } from '../data/questions';
import { CONCEPTS } from '../data/concepts';
import { ENGLISH_VOCAB_DATABASE } from '../data/englishVocab';
import confetti from 'canvas-confetti';

export type ActiveView =
  | 'dashboard'
  | 'subjects'
  | 'categories'
  | 'training'
  | 'training-summary'
  | 'simulado'
  | 'simulado-quiz'
  | 'simulado-result'
  | 'review'
  | 'dictionary'
  | 'favorites'
  | 'stats'
  | 'settings'
  // Novas telas do Treinamento de Vocabulário ENEM
  | 'vocab-dashboard'
  | 'vocab-quiz'
  | 'vocab-summary'
  | 'vocab-dictionary';

export interface TrainingConfig {
  mode: 'treinamento' | 'simulado' | 'revisao' | 'conceito_individual';
  subject?: Subject | 'misto';
  category?: string;
  conceptId?: string;
  questionIds: string[];
  currentIndex: number;
  userAnswers: Record<string, string>; // questionId -> chosenOptionId
  isCompleted: boolean;
  scoreGained: number;
  startTime: number;
}

export interface VocabQuizConfig {
  mode: VocabTrainingMode;
  categoryFilter?: string;
  difficultyFilter?: string;
  wordIds: string[];
  currentIndex: number;
  userAnswers: Record<string, string>; // wordId -> chosen translation / cloze answer
  isCompleted: boolean;
  scoreGained: number;
  startTime: number;
}

interface AppContextType {
  state: AppState;
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  selectedSubject: Subject | 'misto' | null;
  setSelectedSubject: (s: Subject | 'misto' | null) => void;
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null) => void;
  trainingConfig: TrainingConfig | null;
  setTrainingConfig: (cfg: TrainingConfig | null) => void;
  activeConceptDetail: Concept | null;
  setActiveConceptDetail: (concept: Concept | null) => void;

  // Vocabulário de Inglês
  vocabQuizConfig: VocabQuizConfig | null;
  setVocabQuizConfig: (cfg: VocabQuizConfig | null) => void;
  activeOriginalQuestionWord: VocabWord | null;
  setActiveOriginalQuestionWord: (w: VocabWord | null) => void;
  
  // Actions
  setProfileName: (name: string) => void;
  toggleTheme: () => void;
  startTraining: (subject?: Subject | 'misto', category?: string, questionCount?: number) => void;
  startConceptTraining: (conceptId: string) => void;
  startSimulado: (questionCount: number) => void;
  startReviewErrors: () => void;
  resumeLastTraining: () => void;
  submitAnswer: (questionId: string, optionId: string, isCorrect: boolean) => { xpAwarded: number; newBadges: string[] };
  nextTrainingQuestion: () => void;
  finishTrainingSession: () => void;
  toggleFavoriteQuestion: (questionId: string) => void;
  toggleFavoriteConcept: (conceptId: string) => void;
  resetAllData: () => void;
  refreshState: () => void;
  triggerConfetti: () => void;

  // Vocab Actions
  startVocabTraining: (mode: VocabTrainingMode, count?: number, categoryFilter?: string, difficultyFilter?: string) => void;
  submitVocabAnswer: (wordId: string, chosenAnswer: string, isCorrect: boolean) => { xpAwarded: number; newBadges: string[] };
  nextVocabQuestion: () => void;
  finishVocabSession: () => void;
  toggleFavoriteVocab: (wordId: string) => void;
  playWordAudio: (text: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(() => loadAppState());
  const [activeView, setActiveView] = useState<ActiveView>('dashboard');
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'misto' | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [trainingConfig, setTrainingConfig] = useState<TrainingConfig | null>(null);
  const [activeConceptDetail, setActiveConceptDetail] = useState<Concept | null>(null);

  // Vocab State
  const [vocabQuizConfig, setVocabQuizConfig] = useState<VocabQuizConfig | null>(null);
  const [activeOriginalQuestionWord, setActiveOriginalQuestionWord] = useState<VocabWord | null>(null);

  // Apply dark mode class to root HTML
  useEffect(() => {
    if (state.settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.settings.theme]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const playWordAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const setProfileName = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const now = new Date().toISOString();
    const updated: AppState = {
      ...state,
      profile: {
        name: trimmed,
        avatar: 'scholar',
        createdAt: state.profile?.createdAt || now,
        lastActive: now
      }
    };
    setState(updated);
    saveAppState(updated);
  };

  const toggleTheme = () => {
    const nextTheme = state.settings.theme === 'light' ? 'dark' : 'light';
    const updated: AppState = {
      ...state,
      settings: {
        ...state.settings,
        theme: nextTheme
      }
    };
    setState(updated);
    saveAppState(updated);
  };

  const toggleFavoriteQuestion = (questionId: string) => {
    const exists = state.savedQuestions.includes(questionId);
    const updatedList = exists
      ? state.savedQuestions.filter(id => id !== questionId)
      : [...state.savedQuestions, questionId];

    const updated: AppState = { ...state, savedQuestions: updatedList };
    setState(updated);
    saveAppState(updated);
  };

  const toggleFavoriteConcept = (conceptId: string) => {
    const exists = state.savedConcepts.includes(conceptId);
    const updatedList = exists
      ? state.savedConcepts.filter(id => id !== conceptId)
      : [...state.savedConcepts, conceptId];

    const updated: AppState = { ...state, savedConcepts: updatedList };
    setState(updated);
    saveAppState(updated);
  };

  const toggleFavoriteVocab = (wordId: string) => {
    const exists = state.savedVocabWords.includes(wordId);
    const updatedList = exists
      ? state.savedVocabWords.filter(id => id !== wordId)
      : [...state.savedVocabWords, wordId];

    const updated: AppState = { ...state, savedVocabWords: updatedList };
    setState(updated);
    saveAppState(updated);
  };

  // Launch normal training (by subject or category)
  const startTraining = (subject: Subject | 'misto' = 'misto', category?: string, questionCount: number = 10) => {
    let questions: Question[] = [];

    if (category) {
      questions = getQuestionsByCategory(category);
    } else if (subject && subject !== 'misto') {
      questions = getQuestionsBySubject(subject);
    } else {
      questions = [...ALL_QUESTIONS];
    }

    if (questions.length === 0) {
      questions = [...ALL_QUESTIONS];
    }

    // Shuffle and pick
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, questionCount);

    const cfg: TrainingConfig = {
      mode: 'treinamento',
      subject,
      category,
      questionIds: shuffled.map(q => q.id),
      currentIndex: 0,
      userAnswers: {},
      isCompleted: false,
      scoreGained: 0,
      startTime: Date.now()
    };

    setTrainingConfig(cfg);
    setActiveView('training');

    // Save resume state
    const updatedState: AppState = {
      ...state,
      resumeState: {
        subject,
        category,
        lastQuestionIndex: 0,
        questionIds: cfg.questionIds,
        userAnswers: {},
        timestamp: new Date().toISOString()
      }
    };
    setState(updatedState);
    saveAppState(updatedState);
  };

  // Launch concept-specific training (e.g. from Dictionary "Testar este conceito")
  const startConceptTraining = (conceptId: string) => {
    const related = ALL_QUESTIONS.filter(q => q.correctConceptId === conceptId);
    const chosen = related.length > 0 ? related : getRandomQuestions(3);

    const cfg: TrainingConfig = {
      mode: 'conceito_individual',
      conceptId,
      questionIds: chosen.map(q => q.id),
      currentIndex: 0,
      userAnswers: {},
      isCompleted: false,
      scoreGained: 0,
      startTime: Date.now()
    };

    setTrainingConfig(cfg);
    setActiveView('training');
  };

  // Launch Simulado ENEM (10, 20 or 30 questions)
  const startSimulado = (questionCount: number) => {
    const lingRatio = Math.round(questionCount * 0.42);
    const humRatio = Math.round(questionCount * 0.42);
    const ingRatio = questionCount - lingRatio - humRatio;

    const ling = getRandomQuestions(lingRatio, 'linguagens');
    const hum = getRandomQuestions(humRatio, 'humanas');
    const ing = getRandomQuestions(ingRatio, 'ingles');

    const combined = [...ling, ...hum, ...ing].sort(() => Math.random() - 0.5);

    const cfg: TrainingConfig = {
      mode: 'simulado',
      subject: 'misto',
      questionIds: combined.map(q => q.id),
      currentIndex: 0,
      userAnswers: {},
      isCompleted: false,
      scoreGained: 0,
      startTime: Date.now()
    };

    setTrainingConfig(cfg);
    setActiveView('simulado-quiz');
  };

  // Launch Review session for missed questions
  const startReviewErrors = () => {
    const errorQuestionIds = Object.keys(state.questionStats).filter(
      qid => state.questionStats[qid].timesWrong > 0
    );

    let questionsToReview: Question[] = [];
    if (errorQuestionIds.length > 0) {
      questionsToReview = ALL_QUESTIONS.filter(q => errorQuestionIds.includes(q.id));
    } else {
      questionsToReview = getRandomQuestions(8);
    }

    const shuffled = [...questionsToReview].sort(() => Math.random() - 0.5).slice(0, 10);

    const cfg: TrainingConfig = {
      mode: 'revisao',
      questionIds: shuffled.map(q => q.id),
      currentIndex: 0,
      userAnswers: {},
      isCompleted: false,
      scoreGained: 0,
      startTime: Date.now()
    };

    setTrainingConfig(cfg);
    setActiveView('training');
  };

  // Resume last session
  const resumeLastTraining = () => {
    if (!state.resumeState) return;
    const { subject, category, lastQuestionIndex, questionIds, userAnswers } = state.resumeState;

    const cfg: TrainingConfig = {
      mode: 'treinamento',
      subject,
      category,
      questionIds,
      currentIndex: Math.min(lastQuestionIndex, questionIds.length - 1),
      userAnswers: { ...userAnswers },
      isCompleted: false,
      scoreGained: 0,
      startTime: Date.now()
    };

    setTrainingConfig(cfg);
    setActiveView('training');
  };

  // Submit answer for standard questions
  const submitAnswer = (questionId: string, optionId: string, isCorrect: boolean) => {
    const question = ALL_QUESTIONS.find(q => q.id === questionId);
    const conceptId = question?.correctConceptId || 'geral';

    const { updatedState, xpAwarded, newBadges } = processAnswerReward(
      state,
      isCorrect,
      questionId,
      conceptId,
      optionId
    );

    setState(updatedState);

    if (trainingConfig) {
      const updatedUserAnswers = {
        ...trainingConfig.userAnswers,
        [questionId]: optionId
      };

      setTrainingConfig({
        ...trainingConfig,
        userAnswers: updatedUserAnswers,
        scoreGained: trainingConfig.scoreGained + xpAwarded
      });

      if (trainingConfig.mode === 'treinamento') {
        const nextResume: ResumeState = {
          subject: trainingConfig.subject || 'misto',
          category: trainingConfig.category,
          lastQuestionIndex: trainingConfig.currentIndex,
          questionIds: trainingConfig.questionIds,
          userAnswers: updatedUserAnswers,
          timestamp: new Date().toISOString()
        };
        const stWithResume = { ...updatedState, resumeState: nextResume };
        setState(stWithResume);
        saveAppState(stWithResume);
      }
    }

    if (isCorrect && (newBadges.length > 0 || (trainingConfig && (trainingConfig.currentIndex + 1) % 5 === 0))) {
      triggerConfetti();
    }

    return { xpAwarded, newBadges };
  };

  // Move to next question or finalize
  const nextTrainingQuestion = () => {
    if (!trainingConfig) return;

    if (trainingConfig.currentIndex + 1 < trainingConfig.questionIds.length) {
      const nextIndex = trainingConfig.currentIndex + 1;
      setTrainingConfig({
        ...trainingConfig,
        currentIndex: nextIndex
      });

      if (state.resumeState) {
        const updatedResume = { ...state.resumeState, lastQuestionIndex: nextIndex };
        const st = { ...state, resumeState: updatedResume };
        setState(st);
        saveAppState(st);
      }
    } else {
      finishTrainingSession();
    }
  };

  // Finish standard session and store in history
  const finishTrainingSession = () => {
    if (!trainingConfig) return;

    const bonusXp = 15;
    const totalXpGained = trainingConfig.scoreGained + bonusXp;

    let correctCount = 0;
    let wrongCount = 0;

    trainingConfig.questionIds.forEach(qid => {
      const q = ALL_QUESTIONS.find(item => item.id === qid);
      const chosen = trainingConfig.userAnswers[qid];
      if (q && chosen) {
        if (chosen === q.correctOptionId) {
          correctCount++;
        } else {
          wrongCount++;
        }
      }
    });

    const sessionRecord: TrainingSessionRecord = {
      id: `session-${Date.now()}`,
      type: trainingConfig.mode,
      title:
        trainingConfig.mode === 'simulado'
          ? `Simulado ENEM (${trainingConfig.questionIds.length} questões)`
          : trainingConfig.category
          ? `Treino: ${trainingConfig.category}`
          : trainingConfig.subject
          ? `Treino: ${trainingConfig.subject.toUpperCase()}`
          : 'Treino de Palavras-Chave',
      subject: trainingConfig.subject,
      category: trainingConfig.category,
      date: new Date().toISOString(),
      totalQuestions: trainingConfig.questionIds.length,
      correctCount,
      wrongCount,
      xpEarned: totalXpGained,
      questionIds: trainingConfig.questionIds
    };

    const updatedState: AppState = {
      ...state,
      gamification: {
        ...state.gamification,
        xp: state.gamification.xp + bonusXp
      },
      history: [sessionRecord, ...state.history],
      resumeState: null
    };

    setState(updatedState);
    saveAppState(updatedState);

    triggerConfetti();

    if (trainingConfig.mode === 'simulado') {
      setActiveView('simulado-result');
    } else {
      setActiveView('training-summary');
    }
  };

  // ==========================================
  // VOCABULARY SYSTEM METHODS
  // ==========================================
  const startVocabTraining = (
    mode: VocabTrainingMode,
    count: number = 10,
    categoryFilter?: string,
    difficultyFilter?: string
  ) => {
    let pool = [...ENGLISH_VOCAB_DATABASE];

    if (categoryFilter && categoryFilter !== 'todas') {
      pool = pool.filter(w => w.category === categoryFilter);
    }

    if (difficultyFilter && difficultyFilter !== 'todas') {
      pool = pool.filter(w => w.difficulty === difficultyFilter);
    }

    // Specialized Mode Filtering
    if (mode === 'frequentes') {
      // Prioritize words with highest verified frequency in the 100 ENEM questions
      pool = [...pool].sort((a, b) => b.frequency - a.frequency);
    } else if (mode === 'falsos_cognatos') {
      pool = pool.filter(w => w.category === 'falsos_cognatos');
    } else if (mode === 'expressoes') {
      pool = pool.filter(w => w.category === 'expressoes_idiomaticas' || w.partOfSpeech === 'expression');
    } else if (mode === 'complete') {
      pool = pool.filter(w => Boolean(w.clozeSentence && w.clozeOptions));
    } else if (mode === 'revisao_inteligente') {
      // Spaced repetition weighting: prioritize unmastered or frequently missed words
      pool = [...pool].sort((a, b) => {
        const statA = state.vocabStats[a.id] || { timesWrong: 0, consecutiveCorrect: 0, timesStudied: 0 };
        const statB = state.vocabStats[b.id] || { timesWrong: 0, consecutiveCorrect: 0, timesStudied: 0 };

        const weightA = (statA.timesWrong * 4) + (statA.timesStudied === 0 ? 5 : 0) - (statA.consecutiveCorrect * 2);
        const weightB = (statB.timesWrong * 4) + (statB.timesStudied === 0 ? 5 : 0) - (statB.consecutiveCorrect * 2);

        return weightB - weightA;
      });
    } else {
      // Shuffle randomly
      pool = pool.sort(() => Math.random() - 0.5);
    }

    if (pool.length === 0) {
      pool = [...ENGLISH_VOCAB_DATABASE];
    }

    const selectedWords = pool.slice(0, Math.min(count, pool.length));

    const cfg: VocabQuizConfig = {
      mode,
      categoryFilter,
      difficultyFilter,
      wordIds: selectedWords.map(w => w.id),
      currentIndex: 0,
      userAnswers: {},
      isCompleted: false,
      scoreGained: 0,
      startTime: Date.now()
    };

    setVocabQuizConfig(cfg);
    setActiveView('vocab-quiz');
  };

  const submitVocabAnswer = (wordId: string, chosenAnswer: string, isCorrect: boolean) => {
    const { updatedState, xpAwarded, newBadges } = processVocabAnswerReward(
      state,
      isCorrect,
      wordId
    );

    setState(updatedState);

    if (vocabQuizConfig) {
      const updatedUserAnswers = {
        ...vocabQuizConfig.userAnswers,
        [wordId]: chosenAnswer
      };

      setVocabQuizConfig({
        ...vocabQuizConfig,
        userAnswers: updatedUserAnswers,
        scoreGained: vocabQuizConfig.scoreGained + xpAwarded
      });
    }

    if (isCorrect) {
      if (newBadges.length > 0 || (vocabQuizConfig && (vocabQuizConfig.currentIndex + 1) % 5 === 0)) {
        triggerConfetti();
      }
    }

    return { xpAwarded, newBadges };
  };

  const nextVocabQuestion = () => {
    if (!vocabQuizConfig) return;

    if (vocabQuizConfig.currentIndex + 1 < vocabQuizConfig.wordIds.length) {
      setVocabQuizConfig({
        ...vocabQuizConfig,
        currentIndex: vocabQuizConfig.currentIndex + 1
      });
    } else {
      finishVocabSession();
    }
  };

  const finishVocabSession = () => {
    if (!vocabQuizConfig) return;

    // Bonus for completing vocabulary round: +10 XP
    const bonusXp = 10;
    const totalScore = vocabQuizConfig.scoreGained + bonusXp;

    let correctCount = 0;
    let wrongCount = 0;

    vocabQuizConfig.wordIds.forEach(wid => {
      const word = ENGLISH_VOCAB_DATABASE.find(item => item.id === wid);
      const chosen = vocabQuizConfig.userAnswers[wid];
      if (word && chosen) {
        const isRight = vocabQuizConfig.mode === 'complete'
          ? chosen === word.clozeCorrect
          : chosen === word.translation;

        if (isRight) correctCount++;
        else wrongCount++;
      }
    });

    const modeLabels: Record<VocabTrainingMode, string> = {
      traducao: 'Tradução Direta',
      contextual: 'Tradução Contextual',
      complete: 'Complete a Frase',
      expressoes: 'Expressões Idiomáticas',
      falsos_cognatos: 'Falsos Cognatos',
      frequentes: 'Palavras Mais Frequentes',
      revisao_inteligente: 'Revisão Espaçada'
    };

    const record: VocabTrainingSessionRecord = {
      id: `vocab-session-${Date.now()}`,
      date: new Date().toISOString(),
      mode: vocabQuizConfig.mode,
      modeLabel: modeLabels[vocabQuizConfig.mode] || 'Treino de Vocabulário',
      totalQuestions: vocabQuizConfig.wordIds.length,
      correctCount,
      wrongCount,
      scoreGained: totalScore,
      wordIds: vocabQuizConfig.wordIds
    };

    const updatedState: AppState = {
      ...state,
      gamification: {
        ...state.gamification,
        xp: state.gamification.xp + bonusXp
      },
      vocabHistory: [record, ...state.vocabHistory]
    };

    setState(updatedState);
    saveAppState(updatedState);

    triggerConfetti();
    setActiveView('vocab-summary');
  };

  const resetAllData = () => {
    clearAppState();
    setState(DEFAULT_INITIAL_STATE);
    setTrainingConfig(null);
    setVocabQuizConfig(null);
    setActiveView('dashboard');
  };

  const refreshState = () => {
    setState(loadAppState());
  };

  return (
    <AppContext.Provider
      value={{
        state,
        activeView,
        setActiveView,
        selectedSubject,
        setSelectedSubject,
        selectedCategory,
        setSelectedCategory,
        trainingConfig,
        setTrainingConfig,
        activeConceptDetail,
        setActiveConceptDetail,
        vocabQuizConfig,
        setVocabQuizConfig,
        activeOriginalQuestionWord,
        setActiveOriginalQuestionWord,
        setProfileName,
        toggleTheme,
        startTraining,
        startConceptTraining,
        startSimulado,
        startReviewErrors,
        resumeLastTraining,
        submitAnswer,
        nextTrainingQuestion,
        finishTrainingSession,
        toggleFavoriteQuestion,
        toggleFavoriteConcept,
        resetAllData,
        refreshState,
        triggerConfetti,
        startVocabTraining,
        submitVocabAnswer,
        nextVocabQuestion,
        finishVocabSession,
        toggleFavoriteVocab,
        playWordAudio
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

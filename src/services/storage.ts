import {
  AppState,
  ConceptMasteryStatus,
  QuestionAnswerRecord,
  TrainingSessionRecord,
  ResumeState,
  VocabMasteryStatus,
  WordUserStat,
  VocabTrainingSessionRecord
} from '../types';
import { calculateLevel } from '../data/badges';

const STORAGE_KEY = 'enem_clave_app_state_v1';
const CURRENT_DATA_VERSION = 2; // Incremented for vocabulary module

export const DEFAULT_INITIAL_STATE: AppState = {
  profile: null,
  gamification: {
    xp: 0,
    streak: 0,
    highestStreak: 0,
    level: 1,
    levelTitle: 'Iniciante Curioso',
    unlockedBadges: []
  },
  questionStats: {},
  conceptMastery: {},
  history: [],
  savedQuestions: [],
  savedConcepts: [],
  settings: {
    theme: 'light',
    soundEnabled: true,
    dataVersion: CURRENT_DATA_VERSION
  },
  resumeState: null,

  // Vocabulário de Inglês ENEM
  vocabStats: {},
  vocabHistory: [],
  savedVocabWords: []
};

export function loadAppState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_INITIAL_STATE;

    const parsed = JSON.parse(raw) as Partial<AppState>;

    // Migrate or merge with defaults without losing existing progress
    const state: AppState = {
      ...DEFAULT_INITIAL_STATE,
      ...parsed,
      settings: {
        ...DEFAULT_INITIAL_STATE.settings,
        ...(parsed.settings || {}),
        dataVersion: CURRENT_DATA_VERSION
      },
      gamification: {
        ...DEFAULT_INITIAL_STATE.gamification,
        ...(parsed.gamification || {})
      },
      questionStats: parsed.questionStats || {},
      conceptMastery: parsed.conceptMastery || {},
      history: parsed.history || [],
      savedQuestions: parsed.savedQuestions || [],
      savedConcepts: parsed.savedConcepts || [],
      resumeState: parsed.resumeState || null,

      // Preserve or initialize vocab fields
      vocabStats: parsed.vocabStats || {},
      vocabHistory: parsed.vocabHistory || [],
      savedVocabWords: parsed.savedVocabWords || []
    };

    return state;
  } catch (err) {
    console.error('Falha ao carregar estado do localStorage', err);
    return DEFAULT_INITIAL_STATE;
  }
}

export function saveAppState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Falha ao salvar estado no localStorage', err);
  }
}

export function clearAppState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Falha ao limpar estado do localStorage', err);
  }
}

export function exportAppStateJson(state: AppState): string {
  return JSON.stringify(state, null, 2);
}

export function importAppStateJson(jsonString: string): AppState {
  const parsed = JSON.parse(jsonString) as Partial<AppState>;
  if (!parsed || typeof parsed !== 'object') {
    throw new Error('Arquivo de dados inválido.');
  }

  const newState: AppState = {
    ...DEFAULT_INITIAL_STATE,
    ...parsed,
    settings: {
      ...DEFAULT_INITIAL_STATE.settings,
      ...(parsed.settings || {}),
      dataVersion: CURRENT_DATA_VERSION
    },
    vocabStats: parsed.vocabStats || {},
    vocabHistory: parsed.vocabHistory || [],
    savedVocabWords: parsed.savedVocabWords || []
  };

  saveAppState(newState);
  return newState;
}

// Logic for computing concept mastery status
export function computeMasteryStatus(correct: number, wrong: number, consecutive: number): ConceptMasteryStatus {
  const total = correct + wrong;
  if (total === 0) return 'nao_estudado';
  if (wrong > 0 && consecutive < 2) return 'precisa_revisao';
  if (correct >= 2 && consecutive >= 2 && correct / total >= 0.75) return 'dominado';
  return 'em_aprendizado';
}

// Logic for computing English vocabulary mastery status
export function computeVocabMasteryStatus(correct: number, wrong: number, consecutive: number): VocabMasteryStatus {
  const total = correct + wrong;
  if (total === 0) return 'nao_estudada';
  if (correct >= 3 && consecutive >= 3 && correct / total >= 0.8) return 'dominada';
  if (correct >= 2 && consecutive >= 2) return 'em_desenvolvimento';
  return 'em_aprendizado';
}

// Award XP & Check Badges Helper for standard questions
export function processAnswerReward(
  currentState: AppState,
  isCorrect: boolean,
  questionId: string,
  conceptId: string,
  chosenOptionId: string
): { updatedState: AppState; xpAwarded: number; newBadges: string[] } {
  const state: AppState = JSON.parse(JSON.stringify(currentState));
  const now = new Date().toISOString();

  let xpAwarded = 0;
  const newBadges: string[] = [];

  // Update streak
  let newStreak = state.gamification.streak;
  if (isCorrect) {
    newStreak += 1;
    xpAwarded += 10; // +10 por acerto

    // Bônus de streak
    if (newStreak === 3) xpAwarded += 5;
    if (newStreak === 5) xpAwarded += 10;
    if (newStreak > 5 && newStreak % 5 === 0) xpAwarded += 15;
  } else {
    newStreak = 0;
  }

  const highestStreak = Math.max(state.gamification.highestStreak, newStreak);
  const totalXp = state.gamification.xp + xpAwarded;
  const levelInfo = calculateLevel(totalXp);

  state.gamification.xp = totalXp;
  state.gamification.streak = newStreak;
  state.gamification.highestStreak = highestStreak;
  state.gamification.level = levelInfo.level;
  state.gamification.levelTitle = levelInfo.title;

  // Update Question Stat
  const prevQStat = state.questionStats[questionId] || {
    timesAnswered: 0,
    timesCorrect: 0,
    timesWrong: 0,
    lastAnsweredAt: now,
    lastWasCorrect: false,
    history: []
  };

  const answerRecord: QuestionAnswerRecord = {
    date: now,
    optionId: chosenOptionId,
    wasCorrect: isCorrect
  };

  state.questionStats[questionId] = {
    timesAnswered: prevQStat.timesAnswered + 1,
    timesCorrect: prevQStat.timesCorrect + (isCorrect ? 1 : 0),
    timesWrong: prevQStat.timesWrong + (isCorrect ? 0 : 1),
    lastAnsweredAt: now,
    lastWasCorrect: isCorrect,
    history: [answerRecord, ...prevQStat.history.slice(0, 9)]
  };

  // Update Concept Mastery
  const prevConceptStat = state.conceptMastery[conceptId] || {
    status: 'nao_estudado',
    totalQuestionsAnswered: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    consecutiveCorrect: 0,
    lastTestedAt: now
  };

  const newCorrect = prevConceptStat.correctAnswers + (isCorrect ? 1 : 0);
  const newWrong = prevConceptStat.wrongAnswers + (isCorrect ? 0 : 1);
  const newConsecutive = isCorrect ? prevConceptStat.consecutiveCorrect + 1 : 0;
  const newStatus = computeMasteryStatus(newCorrect, newWrong, newConsecutive);

  state.conceptMastery[conceptId] = {
    status: newStatus,
    totalQuestionsAnswered: prevConceptStat.totalQuestionsAnswered + 1,
    correctAnswers: newCorrect,
    wrongAnswers: newWrong,
    consecutiveCorrect: newConsecutive,
    lastTestedAt: now
  };

  // Check Badges
  const totalAnsweredCount = Object.values(state.questionStats).reduce((acc, q) => acc + q.timesAnswered, 0);
  const totalCorrectCount = Object.values(state.questionStats).reduce((acc, q) => acc + q.timesCorrect, 0);

  const checkAndUnlock = (badgeId: string) => {
    if (!state.gamification.unlockedBadges.includes(badgeId)) {
      state.gamification.unlockedBadges.push(badgeId);
      newBadges.push(badgeId);
    }
  };

  if (totalAnsweredCount >= 1) checkAndUnlock('badge-first-step');
  if (totalCorrectCount >= 1) checkAndUnlock('badge-first-win');
  if (newStreak >= 3) checkAndUnlock('badge-streak-3');
  if (newStreak >= 5) checkAndUnlock('badge-streak-5');
  if (totalAnsweredCount >= 10) checkAndUnlock('badge-questions-10');
  if (totalAnsweredCount >= 30) checkAndUnlock('badge-questions-30');
  if (Object.values(state.conceptMastery).some(c => c.status === 'dominado')) {
    checkAndUnlock('badge-mastered-concept');
  }

  saveAppState(state);
  return { updatedState: state, xpAwarded, newBadges };
}

// Award XP & Spaced Repetition for Vocabulary Words
export function processVocabAnswerReward(
  currentState: AppState,
  isCorrect: boolean,
  wordId: string
): { updatedState: AppState; xpAwarded: number; newBadges: string[] } {
  const state: AppState = JSON.parse(JSON.stringify(currentState));
  const now = new Date().toISOString();

  let xpAwarded = 0;
  const newBadges: string[] = [];

  // Streak update
  let newStreak = state.gamification.streak;
  if (isCorrect) {
    newStreak += 1;
    xpAwarded += 5; // +5 por vocábulo correto
    if (newStreak === 3) xpAwarded += 3;
    if (newStreak === 5) xpAwarded += 5;
    if (newStreak > 5 && newStreak % 5 === 0) xpAwarded += 10;
  } else {
    newStreak = 0;
  }

  const highestStreak = Math.max(state.gamification.highestStreak, newStreak);
  const totalXp = state.gamification.xp + xpAwarded;
  const levelInfo = calculateLevel(totalXp);

  state.gamification.xp = totalXp;
  state.gamification.streak = newStreak;
  state.gamification.highestStreak = highestStreak;
  state.gamification.level = levelInfo.level;
  state.gamification.levelTitle = levelInfo.title;

  // Update Word Stats
  const prevWordStat: WordUserStat = state.vocabStats[wordId] || {
    timesStudied: 0,
    timesCorrect: 0,
    timesWrong: 0,
    consecutiveCorrect: 0,
    lastStudiedAt: now,
    status: 'nao_estudada'
  };

  const newCorrect = prevWordStat.timesCorrect + (isCorrect ? 1 : 0);
  const newWrong = prevWordStat.timesWrong + (isCorrect ? 0 : 1);
  const newConsecutive = isCorrect ? prevWordStat.consecutiveCorrect + 1 : 0;
  const newStatus = computeVocabMasteryStatus(newCorrect, newWrong, newConsecutive);

  state.vocabStats[wordId] = {
    timesStudied: prevWordStat.timesStudied + 1,
    timesCorrect: newCorrect,
    timesWrong: newWrong,
    consecutiveCorrect: newConsecutive,
    lastStudiedAt: now,
    status: newStatus
  };

  // Check English badge
  const totalVocabMastered = Object.values(state.vocabStats).filter(w => w.status === 'dominada').length;
  if (totalVocabMastered >= 5 && !state.gamification.unlockedBadges.includes('badge-english-expert')) {
    state.gamification.unlockedBadges.push('badge-english-expert');
    newBadges.push('badge-english-expert');
  }

  saveAppState(state);
  return { updatedState: state, xpAwarded, newBadges };
}

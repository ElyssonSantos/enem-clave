import { Badge } from '../types';

export const ALL_BADGES: Badge[] = [
  {
    id: 'badge-first-step',
    title: 'Primeiro Passo',
    description: 'Respondeu à sua primeira questão na plataforma.',
    iconName: 'Footprints',
    category: 'iniciante'
  },
  {
    id: 'badge-first-win',
    title: 'Na Mosca!',
    description: 'Acertou sua primeira questão com sucesso.',
    iconName: 'CheckCircle2',
    category: 'iniciante'
  },
  {
    id: 'badge-streak-3',
    title: 'Trinca de Ouro',
    description: 'Alcançou uma sequência de 3 acertos seguidos.',
    iconName: 'Zap',
    category: 'streak'
  },
  {
    id: 'badge-streak-5',
    title: 'Em Chamas',
    description: 'Alcançou 5 acertos consecutivos sem errar.',
    iconName: 'Flame',
    category: 'streak'
  },
  {
    id: 'badge-questions-10',
    title: 'Ritmo Constante',
    description: 'Respondeu a 10 questões no total.',
    iconName: 'Target',
    category: 'volume'
  },
  {
    id: 'badge-questions-30',
    title: 'Guerreiro do ENEM',
    description: 'Completou 30 questões contextualizadas.',
    iconName: 'Award',
    category: 'volume'
  },
  {
    id: 'badge-persistence-3',
    title: 'Persistência',
    description: 'Concluiu com sucesso 3 sessões de treinamento.',
    iconName: 'Trophy',
    category: 'volume'
  },
  {
    id: 'badge-simulado-1',
    title: 'Batismo de Fogo',
    description: 'Finalizou seu primeiro Simulado ENEM completo.',
    iconName: 'Clock',
    category: 'mestre'
  },
  {
    id: 'badge-review-master',
    title: 'Superação',
    description: 'Revisou e corrigiu um conceito que havia errado.',
    iconName: 'RefreshCw',
    category: 'mestre'
  },
  {
    id: 'badge-mastered-concept',
    title: 'Conceito Dominado',
    description: 'Alcançou o status "Dominado" em um conceito-chave.',
    iconName: 'Sparkles',
    category: 'mestre'
  },
  {
    id: 'badge-linguagens-expert',
    title: 'Analista Textual',
    description: 'Acertou 8 questões da área de Linguagens.',
    iconName: 'BookOpen',
    category: 'mestre'
  },
  {
    id: 'badge-humanas-expert',
    title: 'Crítico Social',
    description: 'Acertou 8 questões de Ciências Humanas.',
    iconName: 'Globe',
    category: 'mestre'
  },
  {
    id: 'badge-english-expert',
    title: 'Global Reader',
    description: 'Acertou 5 questões de Língua Inglesa.',
    iconName: 'Languages',
    category: 'mestre'
  }
];

export const LEVEL_TIERS = [
  { level: 1, minXp: 0, title: 'Iniciante Curioso' },
  { level: 2, minXp: 50, title: 'Leitor Atento' },
  { level: 3, minXp: 120, title: 'Identificador de Pistas' },
  { level: 4, minXp: 220, title: 'Analista de Contexto' },
  { level: 5, minXp: 350, title: 'Estrategista do ENEM' },
  { level: 6, minXp: 500, title: 'Crítico Afiado' },
  { level: 7, minXp: 700, title: 'Mestre dos Conceitos' },
  { level: 8, minXp: 1000, title: 'Gabaritador de Palavras-Chave' }
];

export function calculateLevel(xp: number): { level: number; title: string; currentLevelMinXp: number; nextLevelXp: number; progressPercent: number } {
  let currentTier = LEVEL_TIERS[0];
  let nextTier = LEVEL_TIERS[1];

  for (let i = LEVEL_TIERS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_TIERS[i].minXp) {
      currentTier = LEVEL_TIERS[i];
      nextTier = LEVEL_TIERS[i + 1] || { ...LEVEL_TIERS[i], minXp: LEVEL_TIERS[i].minXp + 400 };
      break;
    }
  }

  const range = nextTier.minXp - currentTier.minXp;
  const inTier = xp - currentTier.minXp;
  const progressPercent = Math.min(100, Math.max(0, Math.round((inTier / range) * 100)));

  return {
    level: currentTier.level,
    title: currentTier.title,
    currentLevelMinXp: currentTier.minXp,
    nextLevelXp: nextTier.minXp,
    progressPercent
  };
}


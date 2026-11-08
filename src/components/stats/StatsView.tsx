import React from 'react';
import { useApp } from '../../context/AppContext';
import { ALL_QUESTIONS } from '../../data/questions';
import { CONCEPTS, SUBJECT_METADATA } from '../../data/concepts';
import { ALL_BADGES, calculateLevel } from '../../data/badges';
import {
  BarChart3,
  Trophy,
  Flame,
  Zap,
  Target,
  Award,
  Calendar,
  CheckCircle2,
  XCircle,
  TrendingUp,
  RotateCcw
} from 'lucide-react';

export const StatsView: React.FC = () => {
  const { state, setActiveConceptDetail } = useApp();
  const { gamification, questionStats, conceptMastery, history } = state;

  const totalAnswered = Object.values(questionStats).reduce((acc, q) => acc + q.timesAnswered, 0);
  const totalCorrect = Object.values(questionStats).reduce((acc, q) => acc + q.timesCorrect, 0);
  const totalWrong = Object.values(questionStats).reduce((acc, q) => acc + q.timesWrong, 0);
  const winRate = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const levelInfo = calculateLevel(gamification.xp);

  // Subject breakdown from real answers
  const subjectTotals = {
    linguagens: { total: 0, correct: 0 },
    humanas: { total: 0, correct: 0 },
    ingles: { total: 0, correct: 0 }
  };

  Object.keys(questionStats).forEach(qid => {
    const q = ALL_QUESTIONS.find(item => item.id === qid);
    const stat = questionStats[qid];
    if (q && subjectTotals[q.subject]) {
      subjectTotals[q.subject].total += stat.timesAnswered;
      subjectTotals[q.subject].correct += stat.timesCorrect;
    }
  });

  // Most missed concepts
  const sortedMissedConcepts = Object.keys(conceptMastery)
    .filter(cid => conceptMastery[cid].wrongAnswers > 0)
    .sort((a, b) => conceptMastery[b].wrongAnswers - conceptMastery[a].wrongAnswers)
    .slice(0, 5)
    .map(cid => ({
      concept: CONCEPTS.find(c => c.id === cid),
      stat: conceptMastery[cid]
    }))
    .filter(item => Boolean(item.concept));

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Estatísticas & Desempenho Real
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Métricas calculadas exclusivamente a partir das suas respostas registradas.
            </p>
          </div>
        </div>
      </div>

      {/* Global Highlights Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="text-xs text-slate-400 font-semibold mb-1">Total Respondidas</div>
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{totalAnswered}</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="text-xs text-slate-400 font-semibold mb-1">Aproveitamento Médio</div>
          <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">{winRate}%</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="text-xs text-slate-400 font-semibold mb-1">Recorde de Sequência</div>
          <div className="text-2xl font-extrabold text-amber-500">{gamification.highestStreak}</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="text-xs text-slate-400 font-semibold mb-1">Nível Atual</div>
          <div className="text-2xl font-extrabold text-violet-600 dark:text-violet-400">Nv. {levelInfo.level}</div>
        </div>
      </div>

      {/* Performance by Subject */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider text-xs text-slate-400 dark:text-slate-500">
          Aproveitamento por Área do Conhecimento
        </h3>

        <div className="space-y-4">
          {(['linguagens', 'humanas', 'ingles'] as const).map(sub => {
            const data = subjectTotals[sub];
            const meta = SUBJECT_METADATA[sub];
            const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;

            return (
              <div key={sub} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-800 dark:text-slate-200">{meta.name}</span>
                  <span className="text-slate-500">
                    {data.correct} de {data.total} acertos ({pct}%)
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Most Missed Concepts */}
      {sortedMissedConcepts.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3 transition-colors">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider text-xs text-rose-500">
            Conceitos com Maior Frequência de Erro
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Conceitos onde você mais escorregou. Clique em um deles para rever sua definição e exemplos práticos:
          </p>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {sortedMissedConcepts.map(({ concept, stat }) => {
              if (!concept) return null;
              return (
                <div
                  key={concept.id}
                  onClick={() => setActiveConceptDetail(concept)}
                  className="py-3 flex items-center justify-between cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 px-2 rounded-xl transition-colors"
                >
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {concept.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {concept.discipline} • {concept.category}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                      {stat.wrongAnswers} {stat.wrongAnswers === 1 ? 'erro' : 'erros'}
                    </span>
                    <p className="text-[10px] text-slate-400">
                      {stat.correctAnswers} acerto{stat.correctAnswers !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Achievements / Badges Section */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider text-xs text-slate-400 dark:text-slate-500">
            Conquistas Desbloqueadas ({gamification.unlockedBadges.length} de {ALL_BADGES.length})
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {ALL_BADGES.map((badge) => {
            const isUnlocked = gamification.unlockedBadges.includes(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-3.5 rounded-2xl border text-center space-y-2 transition-all ${
                  isUnlocked
                    ? 'bg-amber-50/60 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800 shadow-xs'
                    : 'bg-slate-50/40 dark:bg-slate-800/20 border-slate-200/60 dark:border-slate-800/60 opacity-40 grayscale'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl mx-auto flex items-center justify-center ${
                  isUnlocked ? 'bg-amber-500 text-white shadow-xs' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                }`}>
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white line-clamp-1">
                    {badge.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* History of Completed Sessions */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider text-xs text-slate-400 dark:text-slate-500">
          Histórico Recente de Sessões ({history.length})
        </h3>

        {history.length === 0 ? (
          <p className="text-xs text-slate-400 text-center py-4">
            Nenhuma sessão de treinamento ou simulado concluída ainda.
          </p>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {history.slice(0, 10).map((session) => {
              const dateFormatted = new Date(session.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit'
              });
              const pct = session.totalQuestions > 0 ? Math.round((session.correctCount / session.totalQuestions) * 100) : 0;

              return (
                <div key={session.id} className="py-3 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">
                      {session.title}
                    </h4>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3 h-3" />
                      {dateFormatted}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className={`font-bold ${pct >= 70 ? 'text-emerald-600' : 'text-slate-700 dark:text-slate-300'}`}>
                      {session.correctCount} / {session.totalQuestions} ({pct}%)
                    </span>
                    <p className="text-[10px] text-violet-600 dark:text-violet-400 font-semibold">
                      +{session.xpEarned} XP
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};


import React from 'react';
import { useApp } from '../../context/AppContext';
import { ALL_QUESTIONS } from '../../data/questions';
import { CONCEPTS } from '../../data/concepts';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Percent,
  Zap,
  RotateCcw,
  LayoutDashboard,
  ArrowRight,
  BookOpen
} from 'lucide-react';

export const TrainingSummaryView: React.FC = () => {
  const { trainingConfig, setActiveView, startTraining, startReviewErrors, state, setActiveConceptDetail } = useApp();

  if (!trainingConfig) {
    setActiveView('dashboard');
    return null;
  }

  const { questionIds, userAnswers, scoreGained, subject, category } = trainingConfig;

  let correctCount = 0;
  let wrongCount = 0;
  const questionsPracticed = questionIds.map(qid => ALL_QUESTIONS.find(q => q.id === qid)).filter(Boolean);

  questionsPracticed.forEach(q => {
    if (!q) return;
    const chosen = userAnswers[q.id];
    if (chosen === q.correctOptionId) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const total = questionIds.length;
  const winRate = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const completionBonus = 15;
  const totalEarnedXp = scoreGained + completionBonus;

  // Extract unique concepts practiced
  const conceptIds = Array.from(new Set(questionsPracticed.map(q => q?.correctConceptId).filter(Boolean)));
  const conceptsPracticed = conceptIds.map(cid => CONCEPTS.find(c => c.id === cid)).filter(Boolean);

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Celebration Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 text-center space-y-4 shadow-sm transition-colors">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-amber-500/25">
          <Trophy className="w-8 h-8" />
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Treinamento Concluído!
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {category || (subject ? `Área: ${subject.toUpperCase()}` : 'Treinamento Geral')}
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30">
            <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase mb-0.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Acertos</span>
            </div>
            <div className="text-2xl font-extrabold text-emerald-900 dark:text-emerald-200">
              {correctCount}
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/30">
            <div className="flex items-center justify-center gap-1 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase mb-0.5">
              <Percent className="w-3.5 h-3.5" />
              <span>Aproveitamento</span>
            </div>
            <div className="text-2xl font-extrabold text-indigo-900 dark:text-indigo-200">
              {winRate}%
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-violet-50 dark:bg-violet-950/30 border border-violet-100 dark:border-violet-900/30">
            <div className="flex items-center justify-center gap-1 text-violet-600 dark:text-violet-400 font-bold text-xs uppercase mb-0.5">
              <Zap className="w-3.5 h-3.5" />
              <span>XP Ganho</span>
            </div>
            <div className="text-2xl font-extrabold text-violet-900 dark:text-violet-200">
              +{totalEarnedXp}
            </div>
          </div>
        </div>
      </div>

      {/* Concepts Practiced List */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs text-slate-400 dark:text-slate-500">
          Conceitos Trabalhados Nesta Sessão
        </h3>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {conceptsPracticed.map((c) => {
            if (!c) return null;
            const mastery = state.conceptMastery[c.id]?.status || 'em_aprendizado';

            return (
              <div 
                key={c.id} 
                onClick={() => setActiveConceptDetail(c)}
                className="py-3 flex items-center justify-between cursor-pointer group hover:bg-slate-50/50 dark:hover:bg-slate-800/40 px-2 rounded-xl transition-colors"
              >
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {c.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {c.discipline} • {c.category}
                  </p>
                </div>

                <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full capitalize ${
                  mastery === 'dominado'
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : mastery === 'precisa_revisao'
                    ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                    : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300'
                }`}>
                  {mastery === 'precisa_revisao' ? 'Precisa Revisar' : mastery.replace('_', ' ')}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation CTAs */}
      <div className="space-y-3">
        {wrongCount > 0 && (
          <button
            onClick={() => startReviewErrors()}
            className="w-full py-3.5 px-4 rounded-2xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-bold text-sm flex items-center justify-center gap-2 border border-rose-200/60 dark:border-rose-900/40 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Revisar Erros Imediatamente ({wrongCount} questões)</span>
          </button>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => startTraining(subject || 'misto', category, 10)}
            className="flex-1 py-3.5 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
          >
            <span>Novo Treinamento</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setActiveView('dashboard')}
            className="px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Painel Geral</span>
          </button>
        </div>
      </div>
    </div>
  );
};


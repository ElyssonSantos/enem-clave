import React from 'react';
import { useApp } from '../../context/AppContext';
import { ENGLISH_VOCAB_DATABASE } from '../../data/englishVocab';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Percent,
  Zap,
  RotateCcw,
  Languages,
  ArrowRight,
  BookOpen,
  Volume2
} from 'lucide-react';

export const VocabSummaryView: React.FC = () => {
  const { vocabQuizConfig, setActiveView, startVocabTraining, state, playWordAudio, setActiveOriginalQuestionWord } = useApp();

  if (!vocabQuizConfig) {
    setActiveView('vocab-dashboard');
    return null;
  }

  const { wordIds, userAnswers, scoreGained, mode } = vocabQuizConfig;
  const words = wordIds.map(id => ENGLISH_VOCAB_DATABASE.find(w => w.id === id)).filter(Boolean);

  let correctCount = 0;
  let wrongCount = 0;

  words.forEach(w => {
    if (!w) return;
    const chosen = userAnswers[w.id];
    const isRight = mode === 'complete' ? chosen === w.clozeCorrect : chosen === w.translation;
    if (isRight) correctCount++;
    else wrongCount++;
  });

  const total = wordIds.length;
  const winRate = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const totalEarnedXp = scoreGained + 10;

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 text-center space-y-4 shadow-sm transition-colors">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-amber-500/25">
          <Trophy className="w-8 h-8" />
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Rodada de Vocabulário Concluída!
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Treinamento de palavras reais das provas do ENEM finalizado com sucesso.
          </p>
        </div>

        {/* Global Numbers Strip */}
        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30">
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase mb-0.5">
              Acertos
            </div>
            <div className="text-2xl font-extrabold text-emerald-900 dark:text-emerald-200">
              {correctCount} <span className="text-xs font-normal text-slate-400">/ {total}</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/30">
            <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase mb-0.5">
              Aproveitamento
            </div>
            <div className="text-2xl font-extrabold text-indigo-900 dark:text-indigo-200">
              {winRate}%
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-violet-50 dark:bg-violet-950/30 border border-violet-100 dark:border-violet-900/30">
            <div className="text-xs text-violet-600 dark:text-violet-400 font-bold uppercase mb-0.5">
              XP Ganho
            </div>
            <div className="text-2xl font-extrabold text-violet-900 dark:text-violet-200">
              +{totalEarnedXp}
            </div>
          </div>
        </div>
      </div>

      {/* Words Studied in this Round */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider text-xs text-slate-400 dark:text-slate-500">
          Palavras Exercitadas Nesta Rodada ({words.length})
        </h3>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {words.map((w) => {
            if (!w) return null;
            const chosen = userAnswers[w.id];
            const isRight = mode === 'complete' ? chosen === w.clozeCorrect : chosen === w.translation;
            const stat = state.vocabStats[w.id];
            const status = stat?.status || 'em_aprendizado';

            return (
              <div key={w.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => playWordAudio(w.word)}
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-slate-900 dark:text-white uppercase text-sm">
                        {w.word}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">
                        {w.phonetic}
                      </span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">
                      {w.translation} • {w.sourceExam}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full capitalize ${
                    status === 'dominada'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : status === 'em_desenvolvimento'
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                      : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300'
                  }`}>
                    {status.replace('_', ' ')}
                  </span>

                  <button
                    onClick={() => setActiveOriginalQuestionWord(w)}
                    className="text-indigo-600 dark:text-indigo-400 font-semibold text-xs hover:underline"
                  >
                    Ver Prova
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        {wrongCount > 0 && (
          <button
            onClick={() => startVocabTraining('revisao_inteligente', total)}
            className="w-full py-3.5 px-4 rounded-2xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-950/60 text-rose-700 dark:text-rose-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-rose-200/60 dark:border-rose-900/40 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Revisar Palavras Erradas ({wrongCount} termos)</span>
          </button>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => startVocabTraining(mode, total)}
            className="flex-1 py-3.5 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Nova Rodada ({mode})</span>
          </button>

          <button
            onClick={() => setActiveView('vocab-dashboard')}
            className="px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Languages className="w-4 h-4" />
            <span>Painel de Inglês</span>
          </button>
        </div>
      </div>
    </div>
  );
};


import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ALL_QUESTIONS } from '../../data/questions';
import { CONCEPTS, SUBJECT_METADATA } from '../../data/concepts';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  Percent,
  Clock,
  Sparkles,
  BookOpen,
  ChevronDown,
  ChevronUp,
  LayoutDashboard,
  RotateCcw,
  AlertCircle
} from 'lucide-react';

export const SimuladoResultView: React.FC = () => {
  const { trainingConfig, setActiveView, state, startSimulado, setActiveConceptDetail } = useApp();
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  if (!trainingConfig || trainingConfig.mode !== 'simulado') {
    setActiveView('simulado');
    return null;
  }

  const { questionIds, userAnswers } = trainingConfig;
  const questions = questionIds.map(qid => ALL_QUESTIONS.find(q => q.id === qid)).filter(Boolean);

  let correctCount = 0;
  let wrongCount = 0;

  // Breakdown by subject
  const subjectStats: Record<string, { total: number; correct: number }> = {
    linguagens: { total: 0, correct: 0 },
    humanas: { total: 0, correct: 0 },
    ingles: { total: 0, correct: 0 }
  };

  const missedConceptsList: string[] = [];

  questions.forEach(q => {
    if (!q) return;
    const chosen = userAnswers[q.id];
    const isCorrect = chosen === q.correctOptionId;

    if (subjectStats[q.subject]) {
      subjectStats[q.subject].total += 1;
      if (isCorrect) subjectStats[q.subject].correct += 1;
    }

    if (isCorrect) {
      correctCount++;
    } else {
      wrongCount++;
      if (!missedConceptsList.includes(q.correctConceptId)) {
        missedConceptsList.push(q.correctConceptId);
      }
    }
  });

  const total = questionIds.length;
  const winRate = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  // Find previous simulados from history (excluding current if already appended)
  const previousSimulados = state.history.filter(h => h.type === 'simulado');

  const toggleExpand = (id: string) => {
    setExpandedQuestionId(prev => (prev === id ? null : id));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 text-center space-y-4 shadow-sm transition-colors">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-indigo-600/20">
          <Trophy className="w-8 h-8" />
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Resultado do Simulado ENEM
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Avaliação diagnóstica de conceitos e capacidade de interpretação contextual.
          </p>
        </div>

        {/* Note on TRI */}
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
          <span>Nota pedagógica baseada em acertos brutos, sem estimativa oficial de TRI.</span>
        </div>

        {/* Global Numbers */}
        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30">
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase mb-0.5">
              Acertos
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-900 dark:text-emerald-200">
              {correctCount} <span className="text-xs font-normal text-emerald-600/80">/ {total}</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/30">
            <div className="text-xs text-rose-600 dark:text-rose-400 font-bold uppercase mb-0.5">
              Erros
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-rose-900 dark:text-rose-200">
              {wrongCount}
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/30">
            <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase mb-0.5">
              Aproveitamento
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-900 dark:text-indigo-200">
              {winRate}%
            </div>
          </div>
        </div>
      </div>

      {/* Breakdown by Subject */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider text-xs text-slate-400 dark:text-slate-500">
          Desempenho por Matéria
        </h3>

        <div className="space-y-3">
          {(['humanas', 'linguagens', 'ingles'] as const).map((sub) => {
            const stats = subjectStats[sub];
            if (!stats || stats.total === 0) return null;
            const meta = SUBJECT_METADATA[sub];
            const pct = Math.round((stats.correct / stats.total) * 100);

            return (
              <div key={sub} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-800 dark:text-slate-200">{meta.name}</span>
                  <span className="text-slate-500">
                    {stats.correct} de {stats.total} acertos ({pct}%)
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      pct >= 70 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Concepts Needing Review (From Missed Questions) */}
      {missedConceptsList.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3 transition-colors">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider text-xs text-rose-500">
            Conceitos que Precisam de Atenção
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Você errou questões relacionadas aos seguintes conceitos neste simulado. Clique para abrir a ficha completa:
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {missedConceptsList.map((cid) => {
              const concept = CONCEPTS.find(c => c.id === cid);
              if (!concept) return null;
              return (
                <button
                  key={cid}
                  onClick={() => setActiveConceptDetail(concept)}
                  className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200/60 dark:border-rose-900/40 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{concept.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Question-by-Question Detailed Review & Gabarito Comentado */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider text-xs text-slate-400 dark:text-slate-500">
          Gabarito Comentado & Análise Questão a Questão
        </h3>

        <div className="space-y-3">
          {questions.map((q, idx) => {
            if (!q) return null;
            const chosenId = userAnswers[q.id];
            const chosenOption = q.options.find(o => o.id === chosenId);
            const correctOption = q.options.find(o => o.id === q.correctOptionId);
            const isCorrect = chosenId === q.correctOptionId;
            const isExpanded = expandedQuestionId === q.id;

            return (
              <div
                key={q.id}
                className="border border-slate-200/70 dark:border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <div
                  onClick={() => toggleExpand(q.id)}
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center text-white ${
                      isCorrect ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                        {q.correctConceptName} — {q.category}
                      </h4>
                      <p className="text-xs text-slate-500">
                        Sua resposta: <strong className={isCorrect ? 'text-emerald-600' : 'text-rose-600'}>
                          {chosenOption ? `${chosenOption.letter}) ${chosenOption.text}` : 'Não respondida'}
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                    }`}>
                      {isCorrect ? 'Acertou' : 'Errou'}
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>
                </div>

                {/* Expanded Explanation */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-200/60 dark:border-slate-800 space-y-4 text-xs sm:text-sm">
                    {/* Prompt and Passage snippet */}
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/60 dark:border-slate-800">
                      <p className="text-xs text-slate-600 dark:text-slate-300 italic mb-2">
                        "{q.contextText}"
                      </p>
                      <p className="font-bold text-slate-800 dark:text-slate-200">
                        {q.prompt}
                      </p>
                    </div>

                    {/* Correct Option */}
                    <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-200">
                      <span className="font-bold">Gabarito Oficial: Alternativa {correctOption?.letter}</span> — {correctOption?.text}
                      <p className="mt-1 text-slate-700 dark:text-slate-300 leading-relaxed">
                        {q.explanation.whyCorrect}
                      </p>
                    </div>

                    {/* ENEM Tip */}
                    <div className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 text-amber-900 dark:text-amber-200">
                      <span className="font-bold">Dica para o ENEM:</span>
                      <p className="mt-0.5 text-slate-700 dark:text-slate-300">
                        {q.explanation.enemTip}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => startSimulado(total)}
          className="flex-1 py-3.5 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Fazer Outro Simulado</span>
        </button>

        <button
          onClick={() => setActiveView('dashboard')}
          className="px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
        >
          <LayoutDashboard className="w-4 h-4" />
          <span>Voltar ao Painel Geral</span>
        </button>
      </div>
    </div>
  );
};


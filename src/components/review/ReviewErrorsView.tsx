import React from 'react';
import { useApp } from '../../context/AppContext';
import { ALL_QUESTIONS } from '../../data/questions';
import { CONCEPTS, SUBJECT_METADATA } from '../../data/concepts';
import {
  RotateCcw,
  AlertTriangle,
  Sparkles,
  BookOpen,
  Play,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const ReviewErrorsView: React.FC = () => {
  const { state, startReviewErrors, startConceptTraining, setActiveConceptDetail } = useApp();
  const { questionStats, conceptMastery } = state;

  // Filter questions with at least 1 wrong answer
  const missedQuestionIds = Object.keys(questionStats).filter(
    qid => questionStats[qid].timesWrong > 0
  );

  const missedQuestions = missedQuestionIds.map(qid => ALL_QUESTIONS.find(q => q.id === qid)).filter(Boolean);

  // Group missed concepts
  const missedConceptIds = Array.from(new Set(missedQuestions.map(q => q?.correctConceptId).filter(Boolean)));
  const missedConcepts = missedConceptIds.map(cid => CONCEPTS.find(c => c.id === cid)).filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Revisar Meus Erros
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Repetição espaçada inteligente baseada nas suas reais dificuldades.
              </p>
            </div>
          </div>
        </div>

        {missedQuestions.length > 0 && (
          <button
            onClick={() => startReviewErrors()}
            className="px-5 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Treinar Todos os Erros ({missedQuestions.length} questões)</span>
          </button>
        )}
      </div>

      {/* Empty State if No Errors Recorded */}
      {missedQuestions.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 text-center border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-sm transition-colors">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="max-w-md mx-auto space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Nenhum erro registrado até o momento!
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Conforme você resolver questões nos treinamentos e simulados, qualquer alternativa incorreta será catalogada aqui automaticamente com explicações detalhadas para revisão.
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => startReviewErrors()}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors"
            >
              Fazer Treinamento Geral
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Missed Concepts Overview Cards */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider text-xs text-slate-400 dark:text-slate-500">
              Conceitos que Precisam de Reforço ({missedConcepts.length})
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {missedConcepts.map((concept) => {
                if (!concept) return null;
                const stat = conceptMastery[concept.id];
                const masteryStatus = stat?.status || 'precisa_revisao';
                const subjectMeta = SUBJECT_METADATA[concept.subject];

                return (
                  <div
                    key={concept.id}
                    className="p-4 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-800 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {subjectMeta.badgeText} • {concept.discipline}
                        </span>
                        <h4 className="font-bold text-slate-900 dark:text-white text-base">
                          {concept.name}
                        </h4>
                      </div>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        masteryStatus === 'dominado'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                          : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                      }`}>
                        {masteryStatus === 'dominado' ? 'Dominado' : 'Precisa Revisão'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                      {concept.definition}
                    </p>

                    <div className="flex items-center gap-2 pt-1 border-t border-slate-200/50 dark:border-slate-700/60">
                      <button
                        onClick={() => setActiveConceptDetail(concept)}
                        className="flex-1 py-2 px-3 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs border border-slate-200/70 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Ver Explicação</span>
                      </button>

                      <button
                        onClick={() => startConceptTraining(concept.id)}
                        className="py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Treinar</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Catalog of Questions with Errors */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider text-xs text-slate-400 dark:text-slate-500">
              Questões Respondidas com Erro ({missedQuestions.length})
            </h3>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {missedQuestions.map((q) => {
                if (!q) return null;
                const stat = questionStats[q.id];

                return (
                  <div key={q.id} className="py-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">
                        {q.correctConceptName} — {q.category}
                      </span>
                      <span className="text-rose-500 font-semibold">
                        Erros registrados: {stat.timesWrong} {stat.timesWrong === 1 ? 'vez' : 'vezes'}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 line-clamp-2">
                      "{q.contextText}"
                    </p>

                    <div className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 text-xs text-slate-700 dark:text-slate-300">
                      <strong className="text-amber-900 dark:text-amber-200">Dica ENEM: </strong>
                      {q.explanation.enemTip}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


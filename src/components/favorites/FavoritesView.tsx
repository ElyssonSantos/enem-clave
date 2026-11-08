import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { CONCEPTS, SUBJECT_METADATA } from '../../data/concepts';
import { ALL_QUESTIONS } from '../../data/questions';
import { Bookmark, BookOpen, Play, Trash2, ArrowRight } from 'lucide-react';

export const FavoritesView: React.FC = () => {
  const { state, toggleFavoriteConcept, toggleFavoriteQuestion, setActiveConceptDetail, startConceptTraining } = useApp();
  const [activeTab, setActiveTab] = useState<'concepts' | 'questions'>('concepts');

  const savedConceptsList = state.savedConcepts.map(id => CONCEPTS.find(c => c.id === id)).filter(Boolean);
  const savedQuestionsList = state.savedQuestions.map(id => ALL_QUESTIONS.find(q => q.id === id)).filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center">
            <Bookmark className="w-5 h-5 fill-amber-500" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Meus Favoritos
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Conceitos e questões salvas para fixação e memorização rápida.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('concepts')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'concepts'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          Conceitos Salvos ({savedConceptsList.length})
        </button>

        <button
          onClick={() => setActiveTab('questions')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'questions'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          Questões Salvas ({savedQuestionsList.length})
        </button>
      </div>

      {/* Tab: Concepts */}
      {activeTab === 'concepts' && (
        <div className="space-y-4">
          {savedConceptsList.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-400 text-sm">
              Você ainda não favoritou nenhum conceito. Abra o Dicionário ENEM e clique no ícone de marcador para salvar!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {savedConceptsList.map((concept) => {
                if (!concept) return null;
                const subjectMeta = SUBJECT_METADATA[concept.subject];

                return (
                  <div
                    key={concept.id}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        {subjectMeta.badgeText} • {concept.discipline}
                      </span>

                      <button
                        onClick={() => toggleFavoriteConcept(concept.id)}
                        className="text-rose-400 hover:text-rose-600 p-1"
                        title="Remover dos favoritos"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {concept.name}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {concept.definition}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                      <button
                        onClick={() => setActiveConceptDetail(concept)}
                        className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Ver Detalhes
                      </button>

                      <button
                        onClick={() => startConceptTraining(concept.id)}
                        className="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold text-xs flex items-center gap-1 hover:bg-indigo-600 hover:text-white transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Treinar</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Tab: Questions */}
      {activeTab === 'questions' && (
        <div className="space-y-4">
          {savedQuestionsList.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-400 text-sm">
              Nenhuma questão salva ainda. Durante o treinamento, clique no botão "Favoritar" no canto superior da questão!
            </div>
          ) : (
            <div className="space-y-3">
              {savedQuestionsList.map((q) => {
                if (!q) return null;
                return (
                  <div
                    key={q.id}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">
                        {q.correctConceptName} — {q.category}
                      </span>

                      <button
                        onClick={() => toggleFavoriteQuestion(q.id)}
                        className="text-rose-400 hover:text-rose-600 p-1"
                        title="Remover questão salva"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic">
                      "{q.contextText}"
                    </p>

                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {q.prompt}
                    </p>

                    <div className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 text-xs text-slate-700 dark:text-slate-300 border border-amber-200/60 dark:border-amber-800/40">
                      <strong>Gabarito: </strong> {q.options.find(o => o.id === q.correctOptionId)?.text}
                      <p className="mt-0.5">{q.explanation.enemTip}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};


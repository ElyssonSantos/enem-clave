import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Bookmark, BookmarkCheck, Play, Lightbulb, Compass, AlertCircle, Sparkles } from 'lucide-react';
import { SUBJECT_METADATA } from '../../data/concepts';

export const ConceptDrawer: React.FC = () => {
  const { activeConceptDetail, setActiveConceptDetail, state, toggleFavoriteConcept, startConceptTraining } = useApp();

  if (!activeConceptDetail) return null;

  const concept = activeConceptDetail;
  const isFavorite = state.savedConcepts.includes(concept.id);
  const subjectMeta = SUBJECT_METADATA[concept.subject];

  const handleStartPractice = () => {
    setActiveConceptDetail(null);
    startConceptTraining(concept.id);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={() => setActiveConceptDetail(null)}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      {/* Drawer Panel */}
      <div className="relative z-10 w-full max-w-xl bg-white dark:bg-slate-900 shadow-2xl h-full flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300 border-l border-slate-200 dark:border-slate-800 transition-colors">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/50">
              {subjectMeta.badgeText}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {concept.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleFavoriteConcept(concept.id)}
              className={`p-2 rounded-xl transition-colors ${
                isFavorite
                  ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40'
                  : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={isFavorite ? 'Remover dos favoritos' : 'Salvar como favorito'}
            >
              {isFavorite ? <BookmarkCheck className="w-5 h-5 fill-amber-500" /> : <Bookmark className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setActiveConceptDetail(null)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 flex-1">
          {/* Title & Discipline */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {concept.name}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {concept.discipline}
            </p>
          </div>

          {/* Core Definition Card */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40">
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-semibold text-xs uppercase tracking-wider mb-1.5">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Definição Essencial</span>
            </div>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              {concept.definition}
            </p>
          </div>

          {/* Didactic In-Depth Explanation */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold text-sm">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>Explicação Didática</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/70 dark:border-slate-800">
              {concept.didacticExplanation}
            </p>
          </div>

          {/* Practical Everyday Example */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold text-sm">
              <Compass className="w-4 h-4 text-emerald-500" />
              <span>Exemplo Prático Cotidiano</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-emerald-50/40 dark:bg-emerald-950/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
              {concept.practicalExample}
            </p>
          </div>

          {/* ENEM Context & Cues */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold text-sm">
              <AlertCircle className="w-4 h-4 text-indigo-500" />
              <span>Como Costuma Cair no ENEM</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/70 dark:border-slate-800">
              {concept.enemContext}
            </p>
          </div>

          {/* Confusing / Similar Concepts */}
          {concept.similarConcepts.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Não Confunda! Diferenças Cruciais
              </h3>
              <div className="space-y-2">
                {concept.similarConcepts.map((sim, i) => (
                  <div 
                    key={i}
                    className="p-3.5 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 text-xs text-slate-700 dark:text-slate-300 space-y-1"
                  >
                    <span className="font-bold text-amber-900 dark:text-amber-200">
                      vs. {sim.name}
                    </span>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                      {sim.distinction}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4">
          <button
            onClick={handleStartPractice}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Testar Aprendizado com Questões</span>
          </button>
        </div>
      </div>
    </div>
  );
};


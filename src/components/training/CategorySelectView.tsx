import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { CATEGORIES_BY_SUBJECT, SUBJECT_METADATA } from '../../data/concepts';
import { ArrowLeft, Play, Layers } from 'lucide-react';
import { ALL_QUESTIONS } from '../../data/questions';

export const CategorySelectView: React.FC = () => {
  const { selectedSubject, setSelectedCategory, startTraining, setActiveView } = useApp();
  const [selectedCat, setSelectedCatLocal] = useState<string | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(10);

  if (!selectedSubject || selectedSubject === 'misto') {
    setActiveView('subjects');
    return null;
  }

  const subjectMeta = SUBJECT_METADATA[selectedSubject];
  const categories = CATEGORIES_BY_SUBJECT[selectedSubject] || [];

  const handleStart = () => {
    startTraining(selectedSubject, selectedCat || undefined, questionCount);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-300">
      {/* Header with Back Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setActiveView('subjects')}
          className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/40">
            {subjectMeta.badgeText}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            Escolha a Categoria
          </h1>
        </div>
      </div>

      {/* Session Length Selector */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
          Quantidade de questões nesta sessão:
        </div>
        <div className="flex items-center gap-2">
          {[5, 10, 15].map((cnt) => (
            <button
              key={cnt}
              onClick={() => setQuestionCount(cnt)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                questionCount === cnt
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cnt} questões
            </button>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {/* Option: All categories */}
        <div
          onClick={() => setSelectedCatLocal(null)}
          className={`p-5 rounded-2xl border cursor-pointer transition-all ${
            selectedCat === null
              ? 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-500 shadow-xs'
              : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  Todas as Categorias
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Treino amplo e diversificado da matéria
                </p>
              </div>
            </div>
            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
              selectedCat === null ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300 dark:border-slate-600'
            }`}>
              {selectedCat === null && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
          </div>
        </div>

        {/* Specific categories */}
        {categories.map((cat) => {
          const isSelected = selectedCat === cat;
          const countAvailable = ALL_QUESTIONS.filter(
            q => q.subject === selectedSubject && q.category.toLowerCase() === cat.toLowerCase()
          ).length;

          return (
            <div
              key={cat}
              onClick={() => setSelectedCatLocal(cat)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                isSelected
                  ? 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-500 shadow-xs'
                  : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {cat}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {countAvailable} questões disponíveis
                  </p>
                </div>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300 dark:border-slate-600'
                }`}>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="pt-4 flex justify-end">
        <button
          onClick={handleStart}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Iniciar Treinamento ({questionCount} Questões)</span>
        </button>
      </div>
    </div>
  );
};


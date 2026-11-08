import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, ExternalLink, BookOpen, AlertCircle, Volume2 } from 'lucide-react';

export const OriginalQuestionModal: React.FC = () => {
  const { activeOriginalQuestionWord, setActiveOriginalQuestionWord, playWordAudio } = useApp();

  if (!activeOriginalQuestionWord) return null;

  const word = activeOriginalQuestionWord;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/40">
              Questão Real do ENEM
            </span>
            <span className="text-xs text-slate-400 font-semibold">
              {word.sourceExam}
            </span>
          </div>

          <button
            onClick={() => setActiveOriginalQuestionWord(null)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Word Title & Audio */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                {word.word}
              </h3>
              <button
                onClick={() => playWordAudio(word.word)}
                className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors"
                title="Ouvir pronúncia"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              {word.phonetic} • {word.translation}
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 block">
              {word.frequency} {word.frequency === 1 ? 'ocorrência' : 'ocorrências'}
            </span>
            <span className="text-[10px] text-slate-400">no Caderno ENEM</span>
          </div>
        </div>

        {/* Authentic Excerpt from the ENEM exam */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800/80 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Trecho Original da Prova</span>
          </div>
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic font-serif">
            "{word.enemContext}"
          </p>
        </div>

        {/* Pedagogical Analysis and Contextual Notes */}
        <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
          <div className="flex items-center gap-1.5 font-bold text-indigo-900 dark:text-indigo-300 text-xs uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5 text-indigo-500" />
            <span>Importância na Prova</span>
          </div>
          <p>{word.notes || word.exampleSentence}</p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setActiveOriginalQuestionWord(null)}
          className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};


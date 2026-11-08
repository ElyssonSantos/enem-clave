import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { ENGLISH_VOCAB_DATABASE } from '../../data/englishVocab';
import { VocabWord } from '../../types';
import {
  Volume2,
  CheckCircle2,
  XCircle,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Info,
  Lightbulb,
  BookOpen,
  HelpCircle
} from 'lucide-react';

export const VocabQuizView: React.FC = () => {
  const {
    vocabQuizConfig,
    submitVocabAnswer,
    nextVocabQuestion,
    setActiveView,
    state,
    toggleFavoriteVocab,
    playWordAudio,
    setActiveOriginalQuestionWord
  } = useApp();

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; xpAwarded: number } | null>(null);

  if (!vocabQuizConfig) {
    setActiveView('vocab-dashboard');
    return null;
  }

  const { wordIds, currentIndex, mode } = vocabQuizConfig;
  const currentWordId = wordIds[currentIndex];
  const word = ENGLISH_VOCAB_DATABASE.find(w => w.id === currentWordId);

  if (!word) {
    return (
      <div className="p-8 text-center text-slate-500">
        Palavra não encontrada.{' '}
        <button onClick={() => setActiveView('vocab-dashboard')} className="text-indigo-600 underline">
          Voltar ao painel de vocabulário
        </button>
      </div>
    );
  }

  const isFavorite = state.savedVocabWords.includes(word.id);
  const progressPercent = Math.round(((currentIndex + 1) / wordIds.length) * 100);

  // Generate 4 randomized options for the current question
  const options = useMemo(() => {
    if (mode === 'complete' && word.clozeOptions && word.clozeCorrect) {
      return [...word.clozeOptions].sort(() => Math.random() - 0.5);
    }

    // Default translation / contextual / false cognates mode
    const allDistractors = [...word.distractors];
    const combined = [word.translation, ...allDistractors].slice(0, 4);
    return combined.sort(() => Math.random() - 0.5);
  }, [word.id, mode]);

  const handleSelectOption = (opt: string) => {
    if (isConfirmed) return;
    setSelectedAnswer(opt);

    const isCorrect = mode === 'complete' ? opt === word.clozeCorrect : opt === word.translation;
    const result = submitVocabAnswer(word.id, opt, isCorrect);
    setIsConfirmed(true);
    setFeedback({
      isCorrect,
      xpAwarded: result.xpAwarded
    });
  };

  const handleNext = () => {
    setIsConfirmed(false);
    setSelectedAnswer(null);
    setFeedback(null);
    nextVocabQuestion();
  };

  // Render contextual highlight for Mode 2
  const renderHighlightedContext = (sentence: string, targetWord: string) => {
    const parts = sentence.split(new RegExp(`(${targetWord})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === targetWord.toLowerCase() ? (
            <span
              key={i}
              className="bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold px-1.5 py-0.5 rounded-md underline decoration-indigo-500 decoration-2"
            >
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Top Header: Progress & Round */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400">
              Pergunta {currentIndex + 1} de {wordIds.length}
            </span>
            <span>•</span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium capitalize">
              {word.category.replace('_', ' ')}
            </span>
          </div>

          <button
            onClick={() => toggleFavoriteVocab(word.id)}
            className={`flex items-center gap-1.5 p-1.5 rounded-lg transition-colors ${
              isFavorite
                ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40'
                : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
            title={isFavorite ? 'Remover dos favoritos' : 'Favoritar vocábulo'}
          >
            {isFavorite ? <BookmarkCheck className="w-4 h-4 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
            <span className="text-[11px] hidden sm:inline">
              {isFavorite ? 'Salvo' : 'Salvar'}
            </span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-6 transition-colors">
        {/* Source Badge & Frequency */}
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-400">
            {word.sourceExam}
          </span>
          <span className="font-bold text-indigo-600 dark:text-indigo-400">
            {word.frequency} {word.frequency === 1 ? 'ocorrência' : 'ocorrências'} no ENEM
          </span>
        </div>

        {/* Dynamic Prompt Content Based on Training Mode */}
        {mode === 'complete' && word.clozeSentence ? (
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Complete a lacuna:
            </span>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
              <p className="text-base sm:text-lg text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                "{word.clozeSentence}"
              </p>
            </div>
            <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              Qual palavra em inglês preenche a lacuna de maneira correta?
            </h3>
          </div>
        ) : mode === 'contextual' ? (
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Tradução contextual:
            </span>
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
              <p className="text-base sm:text-lg text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                "{renderHighlightedContext(word.enemContext, word.word)}"
              </p>
            </div>
            <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              Qual é o significado do termo <strong className="text-indigo-600 dark:text-indigo-400 uppercase">"{word.word}"</strong> considerando este contexto?
            </h3>
          </div>
        ) : (
          <div className="text-center space-y-3 py-2">
            {mode === 'falsos_cognatos' && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border border-rose-200/60 dark:border-rose-900/40 uppercase tracking-wider">
                <Lightbulb className="w-3.5 h-3.5" /> Atenção: Falso Cognato
              </span>
            )}

            <div className="flex items-center justify-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                {word.word}
              </h2>
              <button
                onClick={() => playWordAudio(word.word)}
                className="p-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 transition-colors"
                title="Ouvir pronúncia em inglês"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-400 font-mono">
              {word.phonetic}
            </p>

            <h3 className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 pt-1">
              Qual é o significado mais adequado dessa palavra em português?
            </h3>
          </div>
        )}

        {/* 4 Alternatives (A, B, C, D) */}
        <div className="space-y-3 pt-2">
          {options.map((opt, idx) => {
            const letter = String.fromCharCode(65 + idx); // A, B, C, D
            const isSelected = selectedAnswer === opt;
            const isTargetCorrect = mode === 'complete' ? opt === word.clozeCorrect : opt === word.translation;

            let cardStyles = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500';
            let letterStyles = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';

            if (isConfirmed) {
              if (isTargetCorrect) {
                cardStyles = 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-500 ring-1 ring-emerald-500';
                letterStyles = 'bg-emerald-500 text-white';
              } else if (isSelected && !isTargetCorrect) {
                cardStyles = 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-500 ring-1 ring-rose-500';
                letterStyles = 'bg-rose-500 text-white';
              } else {
                cardStyles = 'bg-slate-50/40 dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800/60 opacity-60';
              }
            }

            return (
              <div
                key={opt}
                onClick={() => handleSelectOption(opt)}
                className={`w-full p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all ${cardStyles} ${
                  !isConfirmed ? 'cursor-pointer hover:shadow-xs active:scale-[0.995]' : 'cursor-default'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center flex-shrink-0 transition-colors ${letterStyles}`}>
                  {letter}
                </div>
                <div className="flex-1 pt-0.5">
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                    {opt}
                  </span>
                </div>
                {isConfirmed && isTargetCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                )}
                {isConfirmed && isSelected && !isTargetCorrect && (
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Pedagogical Correction & Explanation Section (After Confirmation) */}
      {isConfirmed && feedback && (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
          {/* Result Banner */}
          <div className={`p-5 rounded-3xl border flex items-center justify-between ${
            feedback.isCorrect
              ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
              : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white ${
                feedback.isCorrect ? 'bg-emerald-500 shadow-md shadow-emerald-500/20' : 'bg-rose-500 shadow-md shadow-rose-500/20'
              }`}>
                {feedback.isCorrect ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
              </div>
              <div>
                <h4 className="font-extrabold text-base">
                  {feedback.isCorrect ? 'Correto! Mandou muito bem.' : 'Atenção ao sentido correto!'}
                </h4>
                <p className="text-xs opacity-90">
                  {feedback.isCorrect
                    ? `Tradução correta: "${word.translation}" (+${feedback.xpAwarded} XP)`
                    : `A tradução correta é "${word.translation}". Essa palavra voltará em rodadas de repetição.`}
                </p>
              </div>
            </div>

            {feedback.isCorrect && (
              <div className="px-3 py-1 rounded-full bg-emerald-200/60 dark:bg-emerald-900/60 font-bold text-xs text-emerald-800 dark:text-emerald-200">
                +{feedback.xpAwarded} XP
              </div>
            )}
          </div>

          {/* Explanation Card */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 transition-colors">
            {/* Example in Action */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Exemplo de Utilização:
              </span>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 text-xs sm:text-sm">
                <p className="font-medium text-slate-800 dark:text-slate-200 italic">
                  "{word.exampleSentence}"
                </p>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Tradução: {word.exampleTranslation}
                </p>
              </div>
            </div>

            {/* ENEM Note */}
            {word.notes && (
              <div className="p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <strong className="text-amber-900 dark:text-amber-200 block">Dica de Fixação para o ENEM:</strong>
                <p className="leading-relaxed">{word.notes}</p>
              </div>
            )}

            {/* Action Buttons: "Ver Questão Original" + "ENTENDI, PRÓXIMA PALAVRA" */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => setActiveOriginalQuestionWord(word)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors border border-slate-200/60 dark:border-slate-700"
              >
                <ExternalLink className="w-4 h-4 text-indigo-500" />
                <span>Ver Questão Original no ENEM</span>
              </button>

              <button
                onClick={handleNext}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Entendi, Próxima Palavra</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


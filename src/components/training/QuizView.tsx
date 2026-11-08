import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ALL_QUESTIONS } from '../../data/questions';
import { CONCEPTS, SUBJECT_METADATA } from '../../data/concepts';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  Sparkles,
  Lightbulb,
  BookOpen,
  Info
} from 'lucide-react';

export const QuizView: React.FC = () => {
  const {
    trainingConfig,
    submitAnswer,
    nextTrainingQuestion,
    setActiveView,
    state,
    toggleFavoriteQuestion,
    setActiveConceptDetail
  } = useApp();

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; xpAwarded: number } | null>(null);

  if (!trainingConfig) {
    setActiveView('dashboard');
    return null;
  }

  const { questionIds, currentIndex } = trainingConfig;
  const currentQuestionId = questionIds[currentIndex];
  const question = ALL_QUESTIONS.find(q => q.id === currentQuestionId);

  if (!question) {
    return (
      <div className="p-8 text-center text-slate-500">
        Questão não encontrada.{' '}
        <button onClick={() => setActiveView('dashboard')} className="text-indigo-600 underline">
          Voltar ao painel
        </button>
      </div>
    );
  }

  const isFavorite = state.savedQuestions.includes(question.id);
  const subjectMeta = SUBJECT_METADATA[question.subject];
  const progressPercent = Math.round(((currentIndex + 1) / questionIds.length) * 100);

  const handleSelectOption = (optId: string) => {
    if (isConfirmed) return; // Locked once confirmed
    setSelectedOptionId(optId);
  };

  const handleConfirm = () => {
    if (!selectedOptionId || isConfirmed) return;

    const isCorrect = selectedOptionId === question.correctOptionId;
    const result = submitAnswer(question.id, selectedOptionId, isCorrect);
    setIsConfirmed(true);
    setFeedback({
      isCorrect,
      xpAwarded: result.xpAwarded
    });
  };

  const handleNext = () => {
    setIsConfirmed(false);
    setSelectedOptionId(null);
    setFeedback(null);
    nextTrainingQuestion();
  };

  const handleOpenConceptSheet = () => {
    const concept = CONCEPTS.find(c => c.id === question.correctConceptId);
    if (concept) {
      setActiveConceptDetail(concept);
    }
  };

  const chosenOption = question.options.find(o => o.id === selectedOptionId);

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Top Header / Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400">
              Questão {currentIndex + 1} de {questionIds.length}
            </span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {subjectMeta.shortName}
            </span>
          </div>

          <button
            onClick={() => toggleFavoriteQuestion(question.id)}
            className={`flex items-center gap-1.5 p-1.5 rounded-lg transition-colors ${
              isFavorite
                ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40'
                : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
            title={isFavorite ? 'Remover dos favoritos' : 'Favoritar questão'}
          >
            {isFavorite ? <BookmarkCheck className="w-4 h-4 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
            <span className="text-[11px] hidden sm:inline">
              {isFavorite ? 'Salva' : 'Favoritar'}
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
        {/* Category & Discipline Badge */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/40">
            {question.category}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {question.discipline}
          </span>
          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full uppercase ml-auto ${
            question.difficulty === 'facil'
              ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
              : question.difficulty === 'medio'
              ? 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400'
              : 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400'
          }`}>
            {question.difficulty}
          </span>
        </div>

        {/* Contextualized Passage (Texto de Apoio) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800/80 space-y-2">
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-normal whitespace-pre-line">
            {question.contextText}
          </p>
          {question.sourceInfo && (
            <p className="text-[11px] text-slate-400 dark:text-slate-500 italic text-right">
              — {question.sourceInfo}
            </p>
          )}
        </div>

        {/* Objective Prompt */}
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
            {question.prompt}
          </h3>
        </div>

        {/* 5 Alternatives (A-E) */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            const isCorrect = option.id === question.correctOptionId;

            let cardStyles = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500';
            let letterStyles = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';

            if (!isConfirmed) {
              if (isSelected) {
                cardStyles = 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-600 ring-1 ring-indigo-600';
                letterStyles = 'bg-indigo-600 text-white';
              }
            } else {
              // After confirmation
              if (isCorrect) {
                cardStyles = 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-500 ring-1 ring-emerald-500';
                letterStyles = 'bg-emerald-500 text-white';
              } else if (isSelected && !isCorrect) {
                cardStyles = 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-500 ring-1 ring-rose-500';
                letterStyles = 'bg-rose-500 text-white';
              } else {
                cardStyles = 'bg-slate-50/40 dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800/60 opacity-60';
              }
            }

            return (
              <div
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                className={`w-full p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all ${cardStyles} ${
                  !isConfirmed ? 'cursor-pointer hover:shadow-xs active:scale-[0.995]' : 'cursor-default'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center flex-shrink-0 transition-colors ${letterStyles}`}>
                  {option.letter}
                </div>
                <div className="flex-1 pt-0.5">
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                    {option.text}
                  </span>
                </div>
                {isConfirmed && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                )}
                {isConfirmed && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                )}
              </div>
            );
          })}
        </div>

        {/* Action Button: Confirm (Before Confirmation) */}
        {!isConfirmed && (
          <div className="pt-2">
            <button
              onClick={handleConfirm}
              disabled={!selectedOptionId}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                selectedOptionId
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20 hover:scale-[1.01] active:scale-[0.99]'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed shadow-none'
              }`}
            >
              <span>Confirmar Resposta</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
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
                  {feedback.isCorrect ? 'Excelente! Resposta correta.' : 'Ops! Resposta incorreta.'}
                </h4>
                <p className="text-xs opacity-90">
                  {feedback.isCorrect
                    ? `Você identificou o conceito com precisão (+${feedback.xpAwarded} XP)`
                    : `Você escolheu a alternativa ${chosenOption?.letter}. Vamos aprender com a justificativa?`}
                </p>
              </div>
            </div>

            {feedback.isCorrect && (
              <div className="px-3 py-1 rounded-full bg-emerald-200/60 dark:bg-emerald-900/60 font-bold text-xs text-emerald-800 dark:text-emerald-200">
                +{feedback.xpAwarded} XP
              </div>
            )}
          </div>

          {/* Didactic Explanation Box */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5 transition-colors">
            {/* Why Correct is Correct */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Por que a resposta é: {question.correctConceptName}?</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-indigo-50/40 dark:bg-indigo-950/20 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
                {question.explanation.whyCorrect}
              </p>
            </div>

            {/* Why the chosen option was wrong (if user erred) */}
            {!feedback.isCorrect && chosenOption && question.explanation.distractorExplanations[chosenOption.letter] && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-sm">
                  <Info className="w-4 h-4" />
                  <span>Por que a alternativa {chosenOption.letter} não se aplica?</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-rose-50/40 dark:bg-rose-950/20 p-4 rounded-2xl border border-rose-100 dark:border-rose-900/30">
                  {question.explanation.distractorExplanations[chosenOption.letter]}
                </p>
              </div>
            )}

            {/* ENEM Tip (Dica para o ENEM) */}
            <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-800/40 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-xs uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>Dica de Ouro para o ENEM</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {question.explanation.enemTip}
              </p>
            </div>

            {/* Action Buttons: "Entenda melhor esse conceito" + "ENTENDI, PRÓXIMA QUESTÃO" */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleOpenConceptSheet}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors border border-slate-200/60 dark:border-slate-700"
              >
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <span>Entenda melhor esse conceito</span>
              </button>

              <button
                onClick={handleNext}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Entendi, Próxima Questão</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


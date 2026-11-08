import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { ALL_QUESTIONS } from '../../data/questions';
import { SUBJECT_METADATA } from '../../data/concepts';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

export const SimuladoQuizView: React.FC = () => {
  const { trainingConfig, setTrainingConfig, finishTrainingSession, setActiveView } = useApp();
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!trainingConfig || trainingConfig.mode !== 'simulado') {
    setActiveView('simulado');
    return null;
  }

  const { questionIds, currentIndex, userAnswers } = trainingConfig;
  const currentQuestionId = questionIds[currentIndex];
  const question = ALL_QUESTIONS.find(q => q.id === currentQuestionId);

  if (!question) return null;

  const subjectMeta = SUBJECT_METADATA[question.subject];
  const answeredCount = Object.keys(userAnswers).length;
  const totalQuestions = questionIds.length;
  const selectedOptionId = userAnswers[question.id] || null;

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optionId: string) => {
    setTrainingConfig({
      ...trainingConfig,
      userAnswers: {
        ...trainingConfig.userAnswers,
        [question.id]: optionId
      }
    });
  };

  const handleGoToQuestion = (index: number) => {
    setTrainingConfig({
      ...trainingConfig,
      currentIndex: index
    });
  };

  const handleFinish = () => {
    setShowConfirmModal(false);
    finishTrainingSession();
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Top Header: Timer & Status */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 flex items-center justify-between shadow-xs transition-colors">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Simulado ENEM
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="text-xs text-slate-500 font-semibold">
            {answeredCount} de {totalQuestions} respondidas
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
            <Clock className="w-3.5 h-3.5 text-indigo-500" />
            <span>{formatTimer(secondsElapsed)}</span>
          </div>

          <button
            onClick={() => setShowConfirmModal(true)}
            className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors shadow-xs"
          >
            Finalizar
          </button>
        </div>
      </div>

      {/* Question Selector Quick Grid */}
      <div className="bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-2 overflow-x-auto">
        {questionIds.map((qid, idx) => {
          const isAnswered = !!userAnswers[qid];
          const isCurrent = idx === currentIndex;

          return (
            <button
              key={qid}
              onClick={() => handleGoToQuestion(idx)}
              className={`w-8 h-8 rounded-xl font-bold text-xs flex-shrink-0 flex items-center justify-center transition-all ${
                isCurrent
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : isAnswered
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Main Question Card (Simulado - No Answer Revealed) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-6 transition-colors">
        {/* Badges */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Questão {currentIndex + 1} de {totalQuestions}
            </span>
            <span>•</span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
              {subjectMeta.badgeText}
            </span>
          </div>
          <span className="text-slate-400 font-medium">
            {question.category}
          </span>
        </div>

        {/* Passage */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800/80 space-y-2">
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
            {question.contextText}
          </p>
          {question.sourceInfo && (
            <p className="text-[11px] text-slate-400 dark:text-slate-500 italic text-right">
              — {question.sourceInfo}
            </p>
          )}
        </div>

        {/* Prompt */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
          {question.prompt}
        </h3>

        {/* Alternatives A-E */}
        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedOptionId === option.id;

            return (
              <div
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                className={`w-full p-4 rounded-2xl border text-left flex items-start gap-3.5 cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-600 ring-1 ring-indigo-600'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center flex-shrink-0 transition-colors ${
                  isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}>
                  {option.letter}
                </div>
                <div className="flex-1 pt-0.5">
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                    {option.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons: Previous / Next */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => handleGoToQuestion(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              currentIndex > 0
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                : 'text-slate-300 dark:text-slate-700 cursor-not-allowed'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          {currentIndex + 1 < totalQuestions ? (
            <button
              onClick={() => handleGoToQuestion(currentIndex + 1)}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Próxima</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setShowConfirmModal(true)}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Concluir Simulado</span>
            </button>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 max-w-sm w-full border border-slate-200 dark:border-slate-800 shadow-xl space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Finalizar Simulado?
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Você respondeu {answeredCount} de {totalQuestions} questões. Deseja entregar o simulado agora para ver a nota e as explicações?
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
              >
                Voltar e Revisar
              </button>
              <button
                onClick={handleFinish}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs"
              >
                Confirmar Entrega
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


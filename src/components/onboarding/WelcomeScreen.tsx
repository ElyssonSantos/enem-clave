import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BookOpen, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const WelcomeScreen: React.FC = () => {
  const { setProfileName, triggerConfetti } = useApp();
  const [nameInput, setNameInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = nameInput.trim();
    if (!clean) {
      setError('Por favor, informe seu nome ou apelido para continuar.');
      return;
    }
    setProfileName(clean);
    triggerConfetti();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 sm:p-6 transition-colors">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-500/5 border border-slate-200/80 dark:border-slate-800 space-y-6">
        {/* Brand Icon */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/25">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center justify-center gap-1.5">
              <span className="font-extrabold text-2xl text-slate-900 dark:text-white">ENEM</span>
              <span className="font-semibold text-xs uppercase px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/40">
                Clave
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Aprendizagem contextualizada por palavras-chave
            </p>
          </div>
        </div>

        {/* Value Proposition Pills */}
        <div className="space-y-2 py-2">
          <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>Identifique conceitos reais em textos do ENEM</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>Explicações didáticas profundas para cada erro</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>100% gratuito e salvo localmente no seu dispositivo</span>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label 
              htmlFor="student-name"
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Como você gostaria de ser chamado(a)?
            </label>
            <input
              id="student-name"
              type="text"
              autoFocus
              placeholder="Ex: Beatriz, Lucas, Rafa..."
              value={nameInput}
              onChange={(e) => {
                setNameInput(e.target.value);
                if (error) setError('');
              }}
              maxLength={25}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm transition-all"
            />
            {error && (
              <p className="text-xs text-rose-500 mt-1.5 font-medium">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>Iniciar meus Estudos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-[11px] text-center text-slate-400 dark:text-slate-500">
          Seu progresso será armazenado com segurança no seu navegador.
        </p>
      </div>
    </div>
  );
};


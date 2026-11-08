import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  BookOpen,
  Globe,
  Languages,
  RotateCcw,
  FileCheck2,
  CheckCircle2,
  XCircle,
  Percent,
  Flame,
  Zap,
  Sparkles,
  AlertTriangle,
  Play,
  ArrowRight,
  Trophy
} from 'lucide-react';
import { calculateLevel, ALL_BADGES } from '../../data/badges';

export const DashboardView: React.FC = () => {
  const {
    state,
    setActiveView,
    setSelectedSubject,
    startTraining,
    startSimulado,
    startReviewErrors,
    resumeLastTraining
  } = useApp();

  const { profile, gamification, questionStats, conceptMastery, resumeState } = state;
  const levelInfo = calculateLevel(gamification.xp);

  // Compute stats
  const totalAnswered = Object.values(questionStats).reduce((acc, q) => acc + q.timesAnswered, 0);
  const totalCorrect = Object.values(questionStats).reduce((acc, q) => acc + q.timesCorrect, 0);
  const totalWrong = Object.values(questionStats).reduce((acc, q) => acc + q.timesWrong, 0);
  const winRate = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const masteredCount = Object.values(conceptMastery).filter(c => c.status === 'dominado').length;
  const needingReviewCount = Object.values(conceptMastery).filter(c => c.status === 'precisa_revisao').length;

  const handleSelectSubject = (subject: 'linguagens' | 'humanas' | 'ingles') => {
    setSelectedSubject(subject);
    setActiveView('categories');
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Greeting & Level Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm transition-colors">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Olá, {profile?.name || 'Estudante'}! 👋
            </h1>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Vamos continuar afiando sua interpretação de conceitos para o ENEM?
          </p>
        </div>

        {/* Level Progress Bar */}
        <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 min-w-[240px]">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Nível {levelInfo.level} — {levelInfo.title}
            </span>
            <span className="text-slate-500 dark:text-slate-400 font-medium">
              {gamification.xp} / {levelInfo.nextLevelXp} XP
            </span>
          </div>
          <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500"
              style={{ width: `${levelInfo.progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* "Continue de Onde Parou" Section */}
      {resumeState && (
        <div className="p-5 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/5 border border-indigo-200/80 dark:border-indigo-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Continue de onde parou
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {resumeState.category || (resumeState.subject ? `Área: ${resumeState.subject.toUpperCase()}` : 'Treinamento')}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Questão {resumeState.lastQuestionIndex + 1} de {resumeState.questionIds.length}
              </p>
            </div>
          </div>

          <button
            onClick={resumeLastTraining}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02]"
          >
            <span>Retomar Treino</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Performance Indicators Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {/* Total Respondidas */}
        <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-1 transition-colors">
          <div className="flex items-center justify-between text-slate-400 dark:text-slate-500 text-xs font-medium">
            <span>Respondidas</span>
            <BookOpen className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {totalAnswered}
          </div>
          <p className="text-[11px] text-slate-400">questões no total</p>
        </div>

        {/* Aproveitamento */}
        <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-1 transition-colors">
          <div className="flex items-center justify-between text-slate-400 dark:text-slate-500 text-xs font-medium">
            <span>Aproveitamento</span>
            <Percent className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
            {winRate}%
          </div>
          <p className="text-[11px] text-slate-400">taxa de acertos</p>
        </div>

        {/* Sequência de Acertos */}
        <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-1 transition-colors">
          <div className="flex items-center justify-between text-slate-400 dark:text-slate-500 text-xs font-medium">
            <span>Sequência Atual</span>
            <Flame className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-500">
            {gamification.streak}
          </div>
          <p className="text-[11px] text-slate-400">máxima: {gamification.highestStreak}</p>
        </div>

        {/* Pontuação Acumulada */}
        <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-1 transition-colors">
          <div className="flex items-center justify-between text-slate-400 dark:text-slate-500 text-xs font-medium">
            <span>Pontos de XP</span>
            <Zap className="w-4 h-4 text-violet-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-violet-600 dark:text-violet-400">
            {gamification.xp}
          </div>
          <p className="text-[11px] text-slate-400">acumulados</p>
        </div>
      </div>

      {/* Secondary Indicators: Dominados vs. Precisa Revisão */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Dominados */}
        <div 
          onClick={() => setActiveView('dictionary')}
          className="bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-800/40 p-4 sm:p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                Conceitos Dominados
              </p>
              <p className="text-xl font-bold text-emerald-900 dark:text-emerald-200">
                {masteredCount} conceito{masteredCount !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            Ver todos <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Precisa de Revisão */}
        <div 
          onClick={() => setActiveView('review')}
          className="bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/70 dark:border-rose-800/40 p-4 sm:p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-rose-800 dark:text-rose-300">
                Precisa de Revisão
              </p>
              <p className="text-xl font-bold text-rose-900 dark:text-rose-200">
                {needingReviewCount} conceito{needingReviewCount !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-1">
            Revisar agora <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Featured Banner: Novo Treinamento de Inglês ENEM */}
      <div 
        onClick={() => setActiveView('vocab-dashboard')}
        className="group relative overflow-hidden bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-700 text-white p-6 sm:p-7 rounded-3xl cursor-pointer shadow-lg shadow-indigo-600/15 hover:shadow-xl transition-all"
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              <Languages className="w-3.5 h-3.5" />
              <span>Novo Módulo • Caderno de Inglês ENEM (100 Questões Reais)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight">
              Treinamento Inteligente de Vocabulário ENEM
            </h2>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              Sistema adaptativo com 6 modos de estudo: conectivos, falsos cognatos, repetição espaçada, cloze tests e pronúncia em áudio. Frequência apurada diretamente das 23 edições analisadas.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="px-5 py-2.5 rounded-xl bg-white text-indigo-700 font-bold text-xs flex items-center gap-1.5 shadow-md group-hover:scale-105 transition-transform">
              <span>Iniciar Treino</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>

      {/* Acesso Rápido aos Treinamentos (Subject Cards) */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          Acesso Rápido aos Treinamentos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* 1. Linguagens */}
          <div
            onClick={() => handleSelectSubject('linguagens')}
            className="group bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 cursor-pointer shadow-xs hover:shadow-md transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center gap-1 transition-colors">
                Praticar <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Linguagens e suas Tecnologias
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Interpretação textual, figuras de linguagem, funções e variação linguística.
              </p>
            </div>
            <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
              25 questões originais disponíveis
            </div>
          </div>

          {/* 2. Ciências Humanas */}
          <div
            onClick={() => handleSelectSubject('humanas')}
            className="group bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-purple-400 dark:hover:border-purple-500 cursor-pointer shadow-xs hover:shadow-md transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex items-center gap-1 transition-colors">
                Praticar <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Ciências Humanas e suas Tecnologias
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Sociologia, Filosofia, História e Geografia urbana contextualizadas.
              </p>
            </div>
            <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
              25 questões originais disponíveis
            </div>
          </div>

          {/* 3. Língua Inglesa */}
          <div
            onClick={() => setActiveView('vocab-dashboard')}
            className="group bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500 cursor-pointer shadow-xs hover:shadow-md transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Languages className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 flex items-center gap-1 transition-colors">
                Praticar <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Língua Inglesa
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Vocabulário instrumental, conectivos, falsos cognatos e repetição espaçada.
              </p>
            </div>
            <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
              6 modos interativos + 100 questões reais
            </div>
          </div>

          {/* 4. Revisão de Palavras-Chave */}
          <div
            onClick={() => startReviewErrors()}
            className="group bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-rose-400 dark:hover:border-rose-500 cursor-pointer shadow-xs hover:shadow-md transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <RotateCcw className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-400 group-hover:text-rose-600 dark:group-hover:text-rose-400 flex items-center gap-1 transition-colors">
                Revisar <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Revisão de Palavras-Chave
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Treine novamente apenas os conceitos que você errou ou precisa consolidar.
              </p>
            </div>
            <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
              Repetição inteligente focada
            </div>
          </div>

          {/* 5. Simulado Misto */}
          <div
            onClick={() => setActiveView('simulado')}
            className="group bg-gradient-to-br from-indigo-600 to-violet-700 text-white p-5 rounded-2xl cursor-pointer shadow-md shadow-indigo-600/20 hover:shadow-lg transition-all space-y-3 md:col-span-2 lg:col-span-2"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-white/90 group-hover:text-white flex items-center gap-1 transition-colors">
                Iniciar Simulado <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">
                Simulado ENEM Clave (Misto)
              </h3>
              <p className="text-xs text-indigo-100 mt-1 leading-relaxed">
                10, 20 ou 30 questões balanceadas entre Humanas, Linguagens e Inglês. Modo de exame sem respostas intermediárias e com relatório completo de desempenho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


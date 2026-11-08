import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ENGLISH_VOCAB_DATABASE, VOCAB_CATEGORIES_METADATA } from '../../data/englishVocab';
import { VocabTrainingMode } from '../../types';
import {
  Languages,
  Flame,
  Zap,
  CheckCircle2,
  XCircle,
  Percent,
  Play,
  RotateCcw,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Volume2,
  TrendingUp,
  Sliders,
  Filter
} from 'lucide-react';

export const VocabDashboardView: React.FC = () => {
  const { state, startVocabTraining, setActiveView, playWordAudio, setActiveOriginalQuestionWord } = useApp();
  const { vocabStats, vocabHistory, gamification } = state;
  const [selectedCount, setSelectedCount] = useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');

  // Compute Vocabulary Stats
  const totalWordsInDB = ENGLISH_VOCAB_DATABASE.length;
  const studiedWordIds = Object.keys(vocabStats).filter(id => vocabStats[id].timesStudied > 0);
  const totalStudied = studiedWordIds.length;

  const totalCorrect = Object.values(vocabStats).reduce((acc, s) => acc + s.timesCorrect, 0);
  const totalWrong = Object.values(vocabStats).reduce((acc, s) => acc + s.timesWrong, 0);
  const totalAttempts = totalCorrect + totalWrong;
  const accuracyRate = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

  const masteredWordsCount = Object.values(vocabStats).filter(s => s.status === 'dominada').length;
  const inDevCount = Object.values(vocabStats).filter(s => s.status === 'em_desenvolvimento').length;
  const learningCount = Object.values(vocabStats).filter(s => s.status === 'em_aprendizado').length;
  const unstudiedCount = totalWordsInDB - totalStudied;

  // Most missed words
  const mostMissedWords = Object.keys(vocabStats)
    .filter(id => vocabStats[id].timesWrong > 0)
    .sort((a, b) => vocabStats[b].timesWrong - vocabStats[a].timesWrong)
    .slice(0, 5)
    .map(id => ({
      word: ENGLISH_VOCAB_DATABASE.find(w => w.id === id),
      stat: vocabStats[id]
    }))
    .filter(item => Boolean(item.word));

  // Top High Frequency Words in ENEM
  const topFrequencyWords = [...ENGLISH_VOCAB_DATABASE]
    .sort((a, b) => b.frequency - a.frequency)
    .slice(0, 8);

  const trainingModes: Array<{
    id: VocabTrainingMode;
    title: string;
    description: string;
    badge: string;
    color: string;
  }> = [
    {
      id: 'frequentes',
      title: 'Modo 6: Palavras Mais Frequentes',
      description: 'Prioriza termos com mais de 5 a 14 ocorrências comprovadas nas 100 questões do ENEM.',
      badge: 'Alta Recorrência',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'traducao',
      title: 'Modo 1: Tradução de Palavras',
      description: 'Apresenta a palavra em inglês e solicita o significado mais adequado entre alternativas plausíveis.',
      badge: 'Vocabulário Direto',
      color: 'from-indigo-500 to-violet-500'
    },
    {
      id: 'contextual',
      title: 'Modo 2: Tradução Contextual',
      description: 'Frases reais do ENEM com termo destacado para identificar o sentido de acordo com o contexto.',
      badge: 'Interpretação',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'complete',
      title: 'Modo 3: Complete a Frase',
      description: 'Sentenças com lacunas para você selecionar a palavra em inglês gramaticalmente e semanticamente correta.',
      badge: 'Cloze Test',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'expressoes',
      title: 'Modo 4: Expressões Idiomáticas',
      description: 'Phrasal verbs e expressões figuradas que costumam confundir quem traduz literalmente.',
      badge: 'Sentido Figurado',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'falsos_cognatos',
      title: 'Modo 5: Falsos Cognatos',
      description: 'Armadilhas clássicas (actually, novel, notice, realize) para você nunca mais cair em pegadinhas.',
      badge: 'Evite Pegadinhas',
      color: 'from-rose-500 to-red-600'
    },
    {
      id: 'revisao_inteligente',
      title: 'Modo Especial: Repetição Espaçada',
      description: 'Algoritmo adaptativo que prioriza termos que você errou ou que ainda não foram dominados.',
      badge: 'Revisão Inteligente',
      color: 'from-violet-600 to-purple-700'
    }
  ];

  const handleStartMode = (mode: VocabTrainingMode) => {
    startVocabTraining(mode, selectedCount, selectedCategory);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-300 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-700 text-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-indigo-600/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
            <Languages className="w-3.5 h-3.5" />
            <span>Base Oficial das 100 Questões (2010 a 2018)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Treinamento de Inglês ENEM
          </h1>
          <p className="text-xs sm:text-sm text-sky-100 max-w-xl leading-relaxed">
            Vocabulário inteligente extraído diretamente de 23 edições reais do ENEM. Aprenda conectivos, falsos cognatos, expressões idiomáticas e os termos mais recorrentes das provas.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          <button
            onClick={() => setActiveView('vocab-dictionary')}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/20 backdrop-blur-xs flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4" />
            <span>Consultar Banco</span>
          </button>
        </div>
      </div>

      {/* Evolution Dashboard Indicators (Section 6) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-1 transition-colors">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Palavras Estudadas</span>
            <BookOpen className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {totalStudied} <span className="text-xs font-normal text-slate-400">/ {totalWordsInDB}</span>
          </div>
          <p className="text-[11px] text-slate-400">no banco catalogado</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-1 transition-colors">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Aproveitamento</span>
            <Percent className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
            {accuracyRate}%
          </div>
          <p className="text-[11px] text-slate-400">
            {totalCorrect} acertos • {totalWrong} erros
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-1 transition-colors">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Sequência de Acertos</span>
            <Flame className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-500">
            {gamification.streak}
          </div>
          <p className="text-[11px] text-slate-400">acertos consecutivos</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-1 transition-colors">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Palavras Dominadas</span>
            <Sparkles className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
            {masteredWordsCount}
          </div>
          <p className="text-[11px] text-slate-400">≥ 3 acertos seguidos e 80%</p>
        </div>
      </div>

      {/* Vocabulary Mastery Progress Strip */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3 transition-colors">
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          <span>Classificação do Domínio do Vocabulário</span>
          <span>{totalWordsInDB} palavras analisadas</span>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
            <span className="block font-bold text-slate-900 dark:text-white text-base">{unstudiedCount}</span>
            <span className="text-[11px] text-slate-400">Não Estudadas</span>
          </div>

          <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300">
            <span className="block font-bold text-indigo-900 dark:text-indigo-200 text-base">{learningCount}</span>
            <span className="text-[11px]">Em Aprendizado</span>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300">
            <span className="block font-bold text-amber-900 dark:text-amber-200 text-base">{inDevCount}</span>
            <span className="text-[11px]">Em Desenvolvimento</span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
            <span className="block font-bold text-emerald-900 dark:text-emerald-200 text-base">{masteredWordsCount}</span>
            <span className="text-[11px]">Dominadas</span>
          </div>
        </div>
      </div>

      {/* High-Frequency Ranking Bar (Section 7) */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              <span>Palavras de Maior Recorrência Comprovada no ENEM</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Frequência real apurada nas 100 questões do Caderno de Inglês (2010 a 2018).
            </p>
          </div>

          <button
            onClick={() => handleStartMode('frequentes')}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Treinar as Mais Recorrentes</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {topFrequencyWords.map((w) => (
            <div
              key={w.id}
              onClick={() => setActiveOriginalQuestionWord(w)}
              className="p-3.5 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60 cursor-pointer hover:border-indigo-400 dark:hover:border-indigo-500 transition-all group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider group-hover:scale-105 transition-transform">
                  {w.word}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                  {w.frequency}x
                </span>
              </div>
              <p className="text-xs font-medium text-slate-700 dark:text-slate-300 truncate">
                {w.translation}
              </p>
              <p className="text-[10px] text-slate-400 mt-1 truncate">
                {w.sourceExam}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Most Missed Words (if any) */}
      {mostMissedWords.length > 0 && (
        <div className="bg-rose-50/50 dark:bg-rose-950/20 p-5 rounded-3xl border border-rose-200/60 dark:border-rose-900/40 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-500" />
              <span>Palavras que Você Mais Errou</span>
            </h4>
            <button
              onClick={() => handleStartMode('revisao_inteligente')}
              className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1"
            >
              Revisar agora <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {mostMissedWords.map(({ word, stat }) => {
              if (!word) return null;
              return (
                <div
                  key={word.id}
                  onClick={() => setActiveOriginalQuestionWord(word)}
                  className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-rose-200 dark:border-rose-900 text-xs flex items-center gap-2 cursor-pointer hover:shadow-xs transition-shadow"
                >
                  <span className="font-bold text-slate-900 dark:text-white">{word.word}</span>
                  <span className="text-[10px] text-rose-600 font-bold">({stat.timesWrong} {stat.timesWrong === 1 ? 'erro' : 'erros'})</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Quiz Configuration Controls: Length & Category Filter */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 transition-colors">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
          <Sliders className="w-4 h-4 text-indigo-500" />
          <span>Configuração da Rodada:</span>
        </div>

        {/* Question Count Selector: 5, 10, 15, 20, 30 */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-slate-400 mr-1 hidden sm:inline">Perguntas:</span>
          {[5, 10, 15, 20, 30].map(cnt => (
            <button
              key={cnt}
              onClick={() => setSelectedCount(cnt)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCount === cnt
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {cnt}
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="todas">Todas as categorias</option>
          <option value="conectivos">Conectivos & Linking Words</option>
          <option value="falsos_cognatos">Falsos Cognatos</option>
          <option value="verbos_recorrentes">Verbos Recorrentes</option>
          <option value="expressoes_idiomaticas">Expressões Idiomáticas</option>
          <option value="sociedade_direitos">Sociedade & Direitos</option>
          <option value="meio_ambiente_ciencia">Meio Ambiente & Ciência</option>
          <option value="interpretacao_textual">Interpretação Textual</option>
        </select>
      </div>

      {/* Modes Grid (Section 4) */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          Escolha uma Modalidade de Treinamento
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trainingModes.map((mode) => (
            <div
              key={mode.id}
              onClick={() => handleStartMode(mode.id)}
              className="group bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 cursor-pointer shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/40">
                    {mode.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center gap-1 transition-colors">
                    Treinar <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {mode.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {mode.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Rodada de {selectedCount} questões</span>
                <Play className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 fill-current group-hover:scale-110 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


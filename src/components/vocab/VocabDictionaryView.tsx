import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { ENGLISH_VOCAB_DATABASE, VOCAB_CATEGORIES_METADATA } from '../../data/englishVocab';
import { VocabWord, VocabMasteryStatus } from '../../types';
import {
  Search,
  BookOpen,
  Volume2,
  Bookmark,
  BookmarkCheck,
  TrendingUp,
  ExternalLink,
  Filter,
  Sparkles,
  ArrowUpDown,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Play
} from 'lucide-react';

export const VocabDictionaryView: React.FC = () => {
  const {
    state,
    setActiveView,
    playWordAudio,
    toggleFavoriteVocab,
    setActiveOriginalQuestionWord,
    startVocabTraining
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [selectedMastery, setSelectedMastery] = useState<string>('todas');
  const [sortBy, setSortBy] = useState<'frequency' | 'alpha-asc' | 'alpha-desc'>('frequency');
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  // Filter and sort items
  const filteredWords = useMemo(() => {
    return ENGLISH_VOCAB_DATABASE.filter((w) => {
      // Search
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase().trim();
        const matchesWord = w.word.toLowerCase().includes(q);
        const matchesTrans = w.translation.toLowerCase().includes(q);
        const matchesAlt = w.alternativeMeanings.some(m => m.toLowerCase().includes(q));
        const matchesExam = w.sourceExam.toLowerCase().includes(q);
        const matchesContext = w.enemContext.toLowerCase().includes(q);
        if (!matchesWord && !matchesTrans && !matchesAlt && !matchesExam && !matchesContext) {
          return false;
        }
      }

      // Category
      if (selectedCategory !== 'todas' && w.category !== selectedCategory) {
        return false;
      }

      // Mastery status
      const userStat = state.vocabStats[w.id];
      const status: VocabMasteryStatus = userStat?.status || 'nao_estudada';
      if (selectedMastery !== 'todas' && status !== selectedMastery) {
        return false;
      }

      // Favorites
      if (onlyFavorites && !state.savedVocabWords.includes(w.id)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'frequency') {
        return b.frequency - a.frequency;
      }
      if (sortBy === 'alpha-asc') {
        return a.word.localeCompare(b.word, 'en-US');
      }
      return b.word.localeCompare(a.word, 'en-US');
    });
  }, [searchTerm, selectedCategory, selectedMastery, sortBy, onlyFavorites, state.vocabStats, state.savedVocabWords]);

  const masteryStatusLabels: Record<VocabMasteryStatus, { label: string; color: string }> = {
    nao_estudada: { label: 'Não Estudada', color: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400' },
    em_aprendizado: { label: 'Em Aprendizado', color: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300' },
    em_desenvolvimento: { label: 'Em Desenvolvimento', color: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300' },
    dominada: { label: 'Dominada', color: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Back button & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <button
            onClick={() => setActiveView('vocab-dashboard')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Treinamento de Inglês</span>
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Dicionário de Inglês do ENEM
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Vocabulário catalogado com transcrição fonética, pronúncia em áudio e trechos originais das provas.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => startVocabTraining('traducao', 10, selectedCategory !== 'todas' ? selectedCategory : undefined)}
          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-colors self-start sm:self-auto"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Praticar Quiz</span>
        </button>
      </div>

      {/* Filter and Search Box */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Pesquisar palavra em inglês, tradução ou trecho... (ex: however, actually, homeless, although)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Category Select */}
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="todas">Todas as categorias ({ENGLISH_VOCAB_DATABASE.length})</option>
              <option value="conectivos">Conectivos & Linking Words</option>
              <option value="falsos_cognatos">Falsos Cognatos</option>
              <option value="verbos_recorrentes">Verbos Recorrentes</option>
              <option value="expressoes_idiomaticas">Expressões Idiomáticas</option>
              <option value="sociedade_direitos">Sociedade & Direitos</option>
              <option value="meio_ambiente_ciencia">Meio Ambiente & Ciência</option>
              <option value="interpretacao_textual">Interpretação Textual</option>
            </select>
          </div>

          {/* Mastery Status Filter */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Domínio:</span>
            <select
              value={selectedMastery}
              onChange={(e) => setSelectedMastery(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="todas">Todos os status</option>
              <option value="dominada">Dominada</option>
              <option value="em_desenvolvimento">Em Desenvolvimento</option>
              <option value="em_aprendizado">Em Aprendizado</option>
              <option value="nao_estudada">Não Estudada</option>
            </select>
          </div>

          {/* Sort Order */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="frequency">Mais Frequentes no ENEM</option>
              <option value="alpha-asc">Ordem Alfabética (A-Z)</option>
              <option value="alpha-desc">Ordem Alfabética (Z-A)</option>
            </select>
          </div>

          {/* Favorites Toggle */}
          <button
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-all ${
              onlyFavorites
                ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-current' : ''}`} />
            <span>Apenas Salvas</span>
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-xs text-slate-500 dark:text-slate-400 px-1 flex items-center justify-between">
        <span>Exibindo <strong>{filteredWords.length}</strong> de {ENGLISH_VOCAB_DATABASE.length} palavras analisadas</span>
        {selectedCategory !== 'todas' && (
          <span className="font-medium text-indigo-600 dark:text-indigo-400">
            Filtro ativo: {VOCAB_CATEGORIES_METADATA[selectedCategory]?.label || selectedCategory}
          </span>
        )}
      </div>

      {/* Vocabulary Cards List */}
      <div className="space-y-4">
        {filteredWords.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 p-12 text-center rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">
              Nenhuma palavra encontrada para os filtros selecionados.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('todas');
                setSelectedMastery('todas');
                setOnlyFavorites(false);
              }}
              className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold underline"
            >
              Limpar filtros
            </button>
          </div>
        ) : (
          filteredWords.map((word) => {
            const isFav = state.savedVocabWords.includes(word.id);
            const userStat = state.vocabStats[word.id];
            const status: VocabMasteryStatus = userStat?.status || 'nao_estudada';
            const statusInfo = masteryStatusLabels[status];

            return (
              <div
                key={word.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700 transition-all space-y-4"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      {word.word}
                    </span>

                    {/* Audio Button */}
                    <button
                      onClick={() => playWordAudio(word.word)}
                      className="p-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-indigo-950/60 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      title="Ouvir pronúncia"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>

                    <span className="font-mono text-xs text-slate-400">
                      {word.phonetic}
                    </span>
                  </div>

                  {/* Top Right Badges */}
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    {/* Frequency Badge */}
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40">
                      <TrendingUp className="w-3 h-3" />
                      <span>{word.frequency}x no ENEM</span>
                    </span>

                    {/* Mastery Status Badge */}
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${statusInfo.color}`}>
                      {statusInfo.label}
                    </span>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={() => toggleFavoriteVocab(word.id)}
                      className={`p-1.5 rounded-xl transition-colors ${
                        isFav
                          ? 'text-amber-500 hover:text-amber-600 bg-amber-50 dark:bg-amber-950/60'
                          : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                      title={isFav ? 'Remover dos favoritos' : 'Salvar palavra'}
                    >
                      {isFav ? <BookmarkCheck className="w-4 h-4 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Translation & Alternative meanings */}
                <div className="space-y-1">
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Tradução: <span className="text-indigo-600 dark:text-indigo-400">{word.translation}</span>
                  </div>
                  {word.alternativeMeanings.length > 0 && (
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Outros sentidos: {word.alternativeMeanings.join(' • ')}
                    </div>
                  )}
                </div>

                {/* Context Excerpt from Authentic ENEM Exam */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800/80 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-slate-500 uppercase tracking-wider">
                      Contexto Real na Prova
                    </span>
                    <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                      {word.sourceExam}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic font-serif leading-relaxed">
                    "{word.enemContext}"
                  </p>
                </div>

                {/* Didactic Note / Pegadinha */}
                {word.notes && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-indigo-50/40 dark:bg-indigo-950/20 p-3 rounded-xl border border-indigo-100/60 dark:border-indigo-900/30">
                    <strong className="text-indigo-900 dark:text-indigo-300">Dica ENEM:</strong> {word.notes}
                  </p>
                )}

                {/* Footer Actions */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    Questão nº {word.questionNumber} do caderno original
                  </span>

                  <button
                    onClick={() => setActiveOriginalQuestionWord(word)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                  >
                    <span>Ver Questão Original</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};


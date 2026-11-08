import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { CONCEPTS, SUBJECT_METADATA } from '../../data/concepts';
import { Concept, Subject, Difficulty } from '../../types';
import {
  Search,
  BookMarked,
  Bookmark,
  BookmarkCheck,
  Filter,
  ArrowUpDown,
  Play,
  Sparkles,
  Layers
} from 'lucide-react';

export const DictionaryView: React.FC = () => {
  const { setActiveConceptDetail, startConceptTraining, state, toggleFavoriteConcept } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'todos'>('todos');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'todas'>('todas');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  // Filter & Sort
  const filteredConcepts = useMemo(() => {
    return CONCEPTS.filter((c) => {
      // Search term
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        const matchesName = c.name.toLowerCase().includes(query);
        const matchesDef = c.definition.toLowerCase().includes(query);
        const matchesCat = c.category.toLowerCase().includes(query);
        const matchesTags = c.tags.some(t => t.toLowerCase().includes(query));
        if (!matchesName && !matchesDef && !matchesCat && !matchesTags) return false;
      }

      // Subject
      if (selectedSubject !== 'todos' && c.subject !== selectedSubject) return false;

      // Difficulty
      if (selectedDifficulty !== 'todas' && c.difficulty !== selectedDifficulty) return false;

      // Only favorites
      if (onlyFavorites && !state.savedConcepts.includes(c.id)) return false;

      return true;
    }).sort((a, b) => {
      if (sortOrder === 'asc') return a.name.localeCompare(b.name, 'pt-BR');
      return b.name.localeCompare(a.name, 'pt-BR');
    });
  }, [searchTerm, selectedSubject, selectedDifficulty, sortOrder, onlyFavorites, state.savedConcepts]);

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <BookMarked className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Dicionário ENEM de Palavras-Chave
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Banco interno de conceitos essenciais, pistas textuais e distinções para a prova.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Pesquisar conceito, termo, tag ou definição... (Ex: Etnocentrismo, Metáfora, Actually)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Subject Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {(['todos', 'humanas', 'linguagens', 'ingles'] as const).map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1.5 rounded-xl font-semibold transition-colors capitalize ${
                  selectedSubject === sub
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {sub === 'todos' ? 'Todas Matérias' : sub}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Favorites Toggle */}
            <button
              onClick={() => setOnlyFavorites(prev => !prev)}
              className={`px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 transition-colors ${
                onlyFavorites
                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-amber-500' : ''}`} />
              <span>Favoritos ({state.savedConcepts.length})</span>
            </button>

            {/* Sort A-Z */}
            <button
              onClick={() => setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))}
              className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition-colors"
              title={sortOrder === 'asc' ? 'Ordem Alfabética (A-Z)' : 'Ordem Inversa (Z-A)'}
            >
              <ArrowUpDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>{filteredConcepts.length} conceitos encontrados</span>
      </div>

      {/* Concepts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredConcepts.map((concept) => {
          const isFavorite = state.savedConcepts.includes(concept.id);
          const subjectMeta = SUBJECT_METADATA[concept.subject];
          const masteryStatus = state.conceptMastery[concept.id]?.status || 'nao_estudado';

          return (
            <div
              key={concept.id}
              className="group bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                {/* Meta Badge & Favorite */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/40">
                      {subjectMeta.badgeText}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {concept.discipline}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavoriteConcept(concept.id);
                    }}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isFavorite ? 'text-amber-500' : 'text-slate-300 dark:text-slate-600 hover:text-slate-500'
                    }`}
                  >
                    {isFavorite ? <BookmarkCheck className="w-4 h-4 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
                  </button>
                </div>

                {/* Concept Name */}
                <h3 
                  onClick={() => setActiveConceptDetail(concept)}
                  className="font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 cursor-pointer transition-colors"
                >
                  {concept.name}
                </h3>

                {/* Short Definition */}
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {concept.definition}
                </p>
              </div>

              {/* Card Footer: Mastery Status & CTA */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize ${
                  masteryStatus === 'dominado'
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : masteryStatus === 'precisa_revisao'
                    ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                    : masteryStatus === 'em_aprendizado'
                    ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300'
                    : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                }`}>
                  {masteryStatus.replace('_', ' ')}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveConceptDetail(concept)}
                    className="font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Ver Ficha
                  </button>
                  <button
                    onClick={() => startConceptTraining(concept.id)}
                    className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors"
                    title="Resolver questão sobre este conceito"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


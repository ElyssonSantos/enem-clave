import React from 'react';
import { useApp } from '../../context/AppContext';
import { Subject } from '../../types';
import { BookOpen, Globe, Languages, Shuffle, ArrowRight } from 'lucide-react';
import { SUBJECT_METADATA } from '../../data/concepts';

export const SubjectSelectView: React.FC = () => {
  const { setSelectedSubject, setActiveView, startTraining } = useApp();

  const handleSelect = (subject: Subject) => {
    setSelectedSubject(subject);
    setActiveView('categories');
  };

  const handleMixed = () => {
    startTraining('misto', undefined, 10);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Treinamento por Matéria
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Selecione a área do conhecimento que você deseja exercitar hoje.
        </p>
      </div>

      {/* Featured Banner: Vocabulário de Inglês */}
      <div 
        onClick={() => setActiveView('vocab-dashboard')}
        className="group bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 text-white p-5 rounded-3xl cursor-pointer shadow-md hover:shadow-lg transition-all flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-xs group-hover:scale-105 transition-transform">
            <Languages className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
              Novo Módulo • Base ENEM 2010 a 2018
            </span>
            <h3 className="font-bold text-base text-white mt-1">
              Treinamento de Vocabulário em Inglês
            </h3>
            <p className="text-xs text-sky-100">
              6 modalidades interativas, conectivos de alta frequência, falsos cognatos e áudio nativo.
            </p>
          </div>
        </div>
        <span className="px-4 py-2 rounded-xl bg-white text-indigo-700 text-xs font-bold shrink-0 hidden sm:flex items-center gap-1.5 shadow-xs group-hover:scale-105 transition-transform">
          <span>Acessar Módulo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Linguagens */}
        <div
          onClick={() => handleSelect('linguagens')}
          className="group bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-indigo-500 cursor-pointer shadow-xs hover:shadow-md transition-all space-y-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {SUBJECT_METADATA.linguagens.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Interpretação, figuras de linguagem, funções da linguagem, variação linguística e gêneros textuais.
            </p>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            <span>25 questões preparadas</span>
            <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Ver categorias <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Ciências Humanas */}
        <div
          onClick={() => handleSelect('humanas')}
          className="group bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-purple-500 cursor-pointer shadow-xs hover:shadow-md transition-all space-y-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {SUBJECT_METADATA.humanas.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Filosofia, Sociologia, História e Geografia urbana com foco em conceitos e cidadania.
            </p>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-purple-600 dark:text-purple-400">
            <span>25 questões preparadas</span>
            <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Ver categorias <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Língua Inglesa */}
        <div
          onClick={() => handleSelect('ingles')}
          className="group bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-sky-500 cursor-pointer shadow-xs hover:shadow-md transition-all space-y-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Languages className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {SUBJECT_METADATA.ingles.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Leitura instrumental, falsos cognatos, conectivos essenciais, skimming e scanning.
            </p>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-sky-600 dark:text-sky-400">
            <span>10 questões com foco prático</span>
            <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Ver categorias <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Treinamento Misto Completo */}
        <div
          onClick={handleMixed}
          className="group bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-slate-800/80 dark:to-slate-900 p-6 rounded-3xl border border-indigo-200/80 dark:border-indigo-800/60 hover:border-indigo-500 cursor-pointer shadow-xs hover:shadow-md transition-all space-y-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-md shadow-indigo-600/20">
            <Shuffle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Treinamento Misto Aleatório
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Questões sorteadas de todas as disciplinas para treinar agilidade mental e flexibilidade conceitual.
            </p>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-indigo-200/40 dark:border-slate-700 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            <span>10 questões sorteadas</span>
            <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Iniciar agora <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


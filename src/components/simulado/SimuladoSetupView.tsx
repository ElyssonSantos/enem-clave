import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FileCheck2, Clock, CheckCircle2, AlertCircle, Play } from 'lucide-react';

export const SimuladoSetupView: React.FC = () => {
  const { startSimulado } = useApp();
  const [selectedCount, setSelectedCount] = useState<number>(20);

  const options = [
    { count: 10, timeEstimate: '~15 min', desc: 'Rápido e objetivo para pausas curtas de estudo.' },
    { count: 20, timeEstimate: '~30 min', desc: 'Recomendado para simular o ritmo de prova intermediário.' },
    { count: 30, timeEstimate: '~45 min', desc: 'Desafio completo com alta densidade de interpretação.' },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <FileCheck2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Simulado ENEM Clave
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Modo de exame misto e cronometrado sem respostas intermediárias.
            </p>
          </div>
        </div>
      </div>

      {/* Rules Card */}
      <div className="p-5 rounded-3xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 space-y-3">
        <h3 className="font-bold text-sm text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span>Como funciona o modo Simulado?</span>
        </h3>
        <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 list-disc list-inside">
          <li>Questões distribuídas entre <strong>Linguagens</strong>, <strong>Ciências Humanas</strong> e <strong>Língua Inglesa</strong>.</li>
          <li>As explicações e gabaritos <strong>não são revelados</strong> durante a resolução.</li>
          <li>Você pode navegar livremente e revisar suas respostas antes de finalizar.</li>
          <li>Ao final, receba um <strong>relatório completo de desempenho</strong> por matéria e a resolução detalhada de cada questão.</li>
        </ul>
      </div>

      {/* Length Selector Cards */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Selecione a extensão do simulado:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {options.map((opt) => {
            const isSelected = selectedCount === opt.count;
            return (
              <div
                key={opt.count}
                onClick={() => setSelectedCount(opt.count)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-600 ring-1 ring-indigo-600 shadow-xs'
                    : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {opt.count}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {opt.timeEstimate}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {opt.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Start Button */}
      <div className="pt-2">
        <button
          onClick={() => startSimulado(selectedCount)}
          className="w-full py-4 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Iniciar Simulado ({selectedCount} Questões)</span>
        </button>
      </div>
    </div>
  );
};


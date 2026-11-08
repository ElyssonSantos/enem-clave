import React from 'react';
import { useApp, ActiveView } from '../../context/AppContext';
import {
  LayoutDashboard,
  GraduationCap,
  FileCheck2,
  Languages,
  RotateCcw,
  BookMarked,
  Bookmark,
  BarChart3,
  Settings
} from 'lucide-react';

interface NavItem {
  id: ActiveView;
  label: string;
  icon: React.ElementType;
  badge?: number | string;
}

export const Sidebar: React.FC = () => {
  const { activeView, setActiveView, state } = useApp();

  // Count items needing review
  const needingReviewCount = Object.values(state.conceptMastery).filter(
    c => c.status === 'precisa_revisao'
  ).length;

  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Painel Geral', icon: LayoutDashboard },
    { id: 'subjects', label: 'Treinamento', icon: GraduationCap },
    { id: 'vocab-dashboard', label: 'Inglês ENEM', icon: Languages, badge: 'PROVAS' },
    { id: 'simulado', label: 'Simulado ENEM', icon: FileCheck2 },
    { 
      id: 'review', 
      label: 'Revisar Meus Erros', 
      icon: RotateCcw,
      badge: needingReviewCount > 0 ? needingReviewCount : undefined
    },
    { id: 'dictionary', label: 'Dicionário ENEM', icon: BookMarked },
    { 
      id: 'favorites', 
      label: 'Favoritos', 
      icon: Bookmark,
      badge: state.savedConcepts.length + state.savedQuestions.length > 0
        ? state.savedConcepts.length + state.savedQuestions.length
        : undefined
    },
    { id: 'stats', label: 'Estatísticas', icon: BarChart3 },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <aside className="w-64 hidden lg:flex flex-col flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4 justify-between transition-colors">
      <div className="space-y-1">
        <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Navegação
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id || 
              (item.id === 'subjects' && (activeView === 'categories' || activeView === 'training' || activeView === 'training-summary')) ||
              (item.id === 'simulado' && (activeView === 'simulado-quiz' || activeView === 'simulado-result')) ||
              (item.id === 'vocab-dashboard' && (activeView === 'vocab-quiz' || activeView === 'vocab-summary' || activeView === 'vocab-dictionary'));

            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all text-left ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    item.id === 'review'
                      ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300'
                      : item.id === 'vocab-dashboard'
                      ? 'bg-sky-100 text-sky-700 dark:bg-sky-950/80 dark:text-sky-300'
                      : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Motivational Footnote */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-slate-800/60 dark:to-slate-800/30 border border-indigo-100/80 dark:border-slate-700/60">
        <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
          Raciocínio & Contexto
        </p>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
          O ENEM não exige decoreba: aprenda a identificar pistas no texto.
        </p>
      </div>
    </aside>
  );
};


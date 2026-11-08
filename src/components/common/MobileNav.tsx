import React from 'react';
import { useApp, ActiveView } from '../../context/AppContext';
import {
  LayoutDashboard,
  GraduationCap,
  Languages,
  FileCheck2,
  RotateCcw
} from 'lucide-react';

export const MobileNav: React.FC = () => {
  const { activeView, setActiveView, state } = useApp();

  const needingReviewCount = Object.values(state.conceptMastery).filter(
    c => c.status === 'precisa_revisao'
  ).length;

  const items: Array<{ id: ActiveView; label: string; icon: React.ElementType; badge?: number }> = [
    { id: 'dashboard', label: 'Início', icon: LayoutDashboard },
    { id: 'subjects', label: 'Treino', icon: GraduationCap },
    { id: 'vocab-dashboard', label: 'Inglês', icon: Languages },
    { id: 'simulado', label: 'Simulado', icon: FileCheck2 },
    { id: 'review', label: 'Revisar', icon: RotateCcw, badge: needingReviewCount > 0 ? needingReviewCount : undefined }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-2 py-1.5 flex items-center justify-around shadow-lg transition-colors">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeView === item.id ||
          (item.id === 'subjects' && (activeView === 'categories' || activeView === 'training' || activeView === 'training-summary')) ||
          (item.id === 'simulado' && (activeView === 'simulado-quiz' || activeView === 'simulado-result')) ||
          (item.id === 'vocab-dashboard' && (activeView === 'vocab-quiz' || activeView === 'vocab-summary' || activeView === 'vocab-dictionary'));

        return (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-colors relative ${isActive
                ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
          >
            <div className="relative">
              <Icon className="w-5 h-5" />
              {item.badge !== undefined && (
                <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="text-[11px] mt-1">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};


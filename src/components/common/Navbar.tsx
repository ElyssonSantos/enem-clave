import React from 'react';
import { useApp } from '../../context/AppContext';
import { Flame, Moon, Sun, Award, Zap, BookOpen } from 'lucide-react';
import { calculateLevel } from '../../data/badges';

export const Navbar: React.FC = () => {
  const { state, toggleTheme, setActiveView } = useApp();
  const { profile, gamification, settings } = state;
  const levelInfo = calculateLevel(gamification.xp);

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div 
          onClick={() => setActiveView('dashboard')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">ENEM</span>
              <span className="font-semibold text-xs uppercase px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/40">
                Clave
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
              Palavras-Chave & Conceitos
            </p>
          </div>
        </div>

        {/* User Stats & Badges Header */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Streak */}
          <div 
            title="Sequência de acertos seguidos"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-800/50 text-amber-700 dark:text-amber-300 font-semibold text-xs sm:text-sm"
          >
            <Flame className={`w-4 h-4 ${gamification.streak > 0 ? 'text-amber-500 fill-amber-500 animate-pulse' : 'text-slate-400'}`} />
            <span>{gamification.streak}</span>
            <span className="hidden md:inline font-normal text-xs text-amber-600/80 dark:text-amber-400/70">seq.</span>
          </div>

          {/* XP & Level */}
          <div 
            onClick={() => setActiveView('stats')}
            title={`Nível ${levelInfo.level}: ${levelInfo.title} (${gamification.xp} XP)`}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300 cursor-pointer hover:bg-indigo-100/60 dark:hover:bg-indigo-900/50 transition-colors"
          >
            <Zap className="w-4 h-4 text-indigo-500 fill-indigo-500" />
            <span className="font-semibold text-xs sm:text-sm">{gamification.xp} XP</span>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-indigo-200/60 dark:bg-indigo-800/60 text-indigo-800 dark:text-indigo-200">
              Nv. {levelInfo.level}
            </span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200/70 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
            title={settings.theme === 'light' ? 'Ativar Modo Escuro' : 'Ativar Modo Claro'}
          >
            {settings.theme === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          {/* Student Profile Pill */}
          {profile && (
            <div 
              onClick={() => setActiveView('settings')}
              className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/60 dark:hover:bg-slate-700 cursor-pointer border border-slate-200/60 dark:border-slate-700 transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 text-white font-bold text-xs flex items-center justify-center">
                {profile.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 max-w-[90px] truncate hidden md:inline">
                {profile.name}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};


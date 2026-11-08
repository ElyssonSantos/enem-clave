import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { exportAppStateJson, importAppStateJson } from '../../services/storage';
import {
  Settings,
  User,
  Moon,
  Sun,
  Download,
  Upload,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  Info
} from 'lucide-react';

export const SettingsView: React.FC = () => {
  const { state, setProfileName, toggleTheme, resetAllData, refreshState } = useApp();
  const [nameInput, setNameInput] = useState(state.profile?.name || '');
  const [nameSavedSuccess, setNameSavedSuccess] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [importError, setImportError] = useState('');
  const [importSuccess, setImportSuccess] = useState(false);

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    setProfileName(nameInput.trim());
    setNameSavedSuccess(true);
    setTimeout(() => setNameSavedSuccess(false), 2500);
  };

  const handleExportData = () => {
    const jsonStr = exportAppStateJson(state);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `enem-clave-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        importAppStateJson(content);
        refreshState();
        setImportSuccess(true);
        setImportError('');
        setTimeout(() => setImportSuccess(false), 3000);
      } catch (err) {
        setImportError('Erro ao importar arquivo. Certifique-se de que é um JSON válido da plataforma.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-300 pb-16">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Configurações
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Gerencie seu perfil, aparência e backup de dados.
            </p>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
          <User className="w-4 h-4 text-indigo-500" />
          <span>Perfil do Estudante</span>
        </div>

        <form onSubmit={handleSaveName} className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
              Nome ou Apelido de Exibição
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                maxLength={30}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                Salvar
              </button>
            </div>
            {nameSavedSuccess && (
              <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Nome atualizado com sucesso!
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Appearance Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Tema Visual
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Alterne entre o tema claro e o tema escuro para descansar a visão.
            </p>
          </div>

          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
          >
            {state.settings.theme === 'light' ? (
              <>
                <Moon className="w-4 h-4" />
                <span>Ativar Modo Escuro</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Ativar Modo Claro</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Backup and Data Sync */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4 transition-colors">
        <div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-white">
            Backup e Portabilidade de Dados
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Exporte suas estatísticas e respostas para transferir para outro celular ou computador.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <button
            onClick={handleExportData}
            className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4 text-indigo-500" />
            <span>Exportar Backup (JSON)</span>
          </button>

          <label className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer">
            <Upload className="w-4 h-4 text-indigo-500" />
            <span>Importar Backup</span>
            <input
              type="file"
              accept=".json,application/json"
              onChange={handleImportFile}
              className="hidden"
            />
          </label>
        </div>

        {importSuccess && (
          <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Backup restaurado com sucesso!
          </p>
        )}
        {importError && (
          <p className="text-xs text-rose-600 font-semibold">
            {importError}
          </p>
        )}
      </div>

      {/* Reset Data (Danger Zone) */}
      <div className="bg-rose-50/50 dark:bg-rose-950/20 rounded-3xl p-6 border border-rose-200/70 dark:border-rose-900/40 space-y-3">
        <h3 className="font-bold text-sm text-rose-900 dark:text-rose-300 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-rose-500" />
          <span>Zona de Redefinição</span>
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          Deseja apagar todo o histórico de respostas, streak e conquistas salvas neste navegador?
        </p>

        <button
          onClick={() => setShowResetModal(true)}
          className="py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-xs"
        >
          <Trash2 className="w-4 h-4" />
          <span>Limpar Histórico e Reiniciar</span>
        </button>
      </div>

      {/* About Box */}
      <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-2">
        <div className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
          <Info className="w-4 h-4 text-indigo-500" />
          <span>Sobre a Metodologia ENEM Clave</span>
        </div>
        <p className="leading-relaxed">
          O ENEM moderno não mede apenas a memorização passiva de definições: ele avalia se o estudante é capaz de ler uma situação cotidiana, um dilema social ou uma manifestação artística e identificar o conceito que opera por trás dela. O ENEM Clave foi desenhado para treinar exatamente essa competência fundamental.
        </p>
      </div>

      {/* Confirmation Modal for Reset */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 max-w-sm w-full border border-slate-200 dark:border-slate-800 shadow-xl space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Tem certeza absoluta?
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Essa ação é irreversível. Todos os seus acertos, erros, sequências e pontuações serão apagados localmente.
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowResetModal(false)}
                className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setShowResetModal(false);
                  resetAllData();
                }}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-xs"
              >
                Sim, Limpar Tudo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


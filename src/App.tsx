import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Sidebar } from './components/common/Sidebar';
import { MobileNav } from './components/common/MobileNav';
import { ConceptDrawer } from './components/common/ConceptDrawer';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';

// Views
import { DashboardView } from './components/dashboard/DashboardView';
import { SubjectSelectView } from './components/training/SubjectSelectView';
import { CategorySelectView } from './components/training/CategorySelectView';
import { QuizView } from './components/training/QuizView';
import { TrainingSummaryView } from './components/training/TrainingSummaryView';
import { SimuladoSetupView } from './components/simulado/SimuladoSetupView';
import { SimuladoQuizView } from './components/simulado/SimuladoQuizView';
import { SimuladoResultView } from './components/simulado/SimuladoResultView';
import { ReviewErrorsView } from './components/review/ReviewErrorsView';
import { DictionaryView } from './components/dictionary/DictionaryView';
import { FavoritesView } from './components/favorites/FavoritesView';
import { StatsView } from './components/stats/StatsView';
import { SettingsView } from './components/settings/SettingsView';

// English Vocabulary System Views & Modals
import { VocabDashboardView } from './components/vocab/VocabDashboardView';
import { VocabQuizView } from './components/vocab/VocabQuizView';
import { VocabSummaryView } from './components/vocab/VocabSummaryView';
import { VocabDictionaryView } from './components/vocab/VocabDictionaryView';
import { OriginalQuestionModal } from './components/vocab/OriginalQuestionModal';

const MainLayout: React.FC = () => {
  const { state, activeView } = useApp();

  // If user has not onboarded yet, show Welcome screen
  if (!state.profile) {
    return <WelcomeScreen />;
  }

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'subjects':
        return <SubjectSelectView />;
      case 'categories':
        return <CategorySelectView />;
      case 'training':
        return <QuizView />;
      case 'training-summary':
        return <TrainingSummaryView />;
      case 'simulado':
        return <SimuladoSetupView />;
      case 'simulado-quiz':
        return <SimuladoQuizView />;
      case 'simulado-result':
        return <SimuladoResultView />;
      case 'review':
        return <ReviewErrorsView />;
      case 'dictionary':
        return <DictionaryView />;
      case 'favorites':
        return <FavoritesView />;
      case 'stats':
        return <StatsView />;
      case 'settings':
        return <SettingsView />;
      case 'vocab-dashboard':
        return <VocabDashboardView />;
      case 'vocab-quiz':
        return <VocabQuizView />;
      case 'vocab-summary':
        return <VocabSummaryView />;
      case 'vocab-dictionary':
        return <VocabDictionaryView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-['Poppins',sans-serif] transition-colors selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Desktop Sidebar */}
        <Sidebar />

        {/* Main Content Viewport */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-w-full">
          {renderActiveView()}
        </main>
      </div>

      {/* Mobile Fixed Bottom Navigation */}
      <MobileNav />

      {/* Global Concept Deep-Dive Drawer */}
      <ConceptDrawer />

      {/* Authentic ENEM English Original Question Modal */}
      <OriginalQuestionModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

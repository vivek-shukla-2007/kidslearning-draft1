import { LearnRoutes } from '@/components/LearnRoutes';
import { useEffect } from 'react';
import { Switch, Route, Router as WouterRouter, useLocation } from 'wouter';
import HomePage from '@/pages/HomePage';
import PracticePage from '@/pages/PracticePage';
import WorksheetsPage from '@/pages/WorksheetsPage';
import ReadPage from '@/pages/ReadPage';
import ParentsPage from '@/pages/ParentsPage';
import AboutPage from '@/pages/AboutPage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { YearProvider } from '@/context/YearContext';

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/learn/*" nest>
            <LearnRoutes />
          </Route>
          <Route path="/practice" component={PracticePage} />
          <Route path="/worksheets" component={WorksheetsPage} />
          <Route path="/read" component={ReadPage} />
          <Route path="/parents" component={ParentsPage} />
          <Route path="/about" component={AboutPage} />
          <Route>
            <div className="container mx-auto px-6 py-20 text-center">
              <h1 className="text-4xl font-bold text-blue-600 mb-4">Page not found</h1>
              <a href="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Back to Home
              </a>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <YearProvider>
        <AppContent />
      </YearProvider>
    </WouterRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import ErrorBoundary from './components/ErrorBoundary';
import { trackPageView, trackEvent } from './utils/analytics';
import { ROUTES } from './constants';

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
}

export default function App() {
  useEffect(() => {
    trackEvent('session_start');
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AnalyticsTracker />
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.CHAT} element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

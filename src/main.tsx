import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './app';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';

const rootElement = document.querySelector('[data-js="root"]');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);
root.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);

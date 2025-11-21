import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const RootWrapper: React.FC = () => {
  useEffect(() => {
    const loader = document.getElementById('initial-loader');
    if (loader) loader.style.display = 'none';
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootWrapper />
  </StrictMode>
);

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Find the container div in the host's HTML.
const container = document.getElementById('script-mfe-root');

if (container) {
  // Create a React root and render the App component into it.
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('Could not find root element with id "script-mfe-root"');
}
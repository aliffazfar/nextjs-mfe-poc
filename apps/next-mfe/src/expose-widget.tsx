import React from 'react';
import { createRoot } from 'react-dom/client';
import Widget from './components/Widget';

console.log('expose-widget.tsx: Script executing.');

function renderWidget() {
  const container = document.getElementById('next-mfe-root');
  console.log('expose-widget.tsx: Attempting to find container:', container);

  if (container) {
    console.log('expose-widget.tsx: Container found, rendering widget.');
    const root = createRoot(container);
    root.render(<Widget />);
  } else {
    console.error('expose-widget.tsx: Could not find root element with id "next-mfe-root". Retrying in 100ms.');
    // Retry in case the script runs before the div is on the page
    setTimeout(renderWidget, 100);
  }
}

// The DOM might not be fully ready when the script executes
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderWidget);
} else {
  renderWidget();
}
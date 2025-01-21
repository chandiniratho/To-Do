import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18+
import App from './App';  // This assumes App.tsx is in the same directory as index.tsx

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // Creating root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

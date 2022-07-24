import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReposProvider from './context/ReposProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ReposProvider>
        <App />
      </ReposProvider>
    </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ReposProvider from './context/ReposProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ReposProvider>
        <App />
      </ReposProvider>
    </React.StrictMode>
  </BrowserRouter>
);

import React from 'react';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import AppRoutes from './applications/AppRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
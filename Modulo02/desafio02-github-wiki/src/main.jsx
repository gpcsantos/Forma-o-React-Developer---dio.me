import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';

import GlobalSytles from './styles.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalSytles />
    <App />
  </React.StrictMode>
);

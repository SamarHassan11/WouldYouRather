import React from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from 'react-router-dom';

import './styles.css'
import App from './App';
import Storage from './utils/storage';
import browserHistory from './utils/history';

Storage.configureStore();

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router history={browserHistory}>
            <App />
        </Router>
    </React.StrictMode>
);
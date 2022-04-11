import React from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import middleware from './middleware';
import reducer from './reducers';
import './styles.css'
import App from './App';
import Storage from './utils/storage';
import browserHistory from './utils/history';

Storage.configureStore();

const store = createStore({
    reducer,
    middleware
});

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={browserHistory}>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>
);
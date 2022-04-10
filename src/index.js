import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'
import Storage from './utils/storage';

Storage.configureStore();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import middleware from './middleware';
import reducer from './reducers';
import './styles.css'
import App from './App';
import Storage from './utils/storage';

Storage.configureStore();

const store = createStore(
    reducer,
    compose(
        middleware,
        // eslint-disable-next-line no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
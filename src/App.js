import React from 'react'

import Header from './components/Header'
import routes from './routes'
import ErrorBoundary from './components/common/ErrorBoundary';
import Storage from './utils/storage';

class App extends React.Component {
    render() {
        const loggedIn = Boolean(Storage.getItem('token'));

        return (
            <ErrorBoundary>
                <div>
                    {loggedIn && <Header />}
                    {routes}
                </div>
            </ErrorBoundary>
        );
    }
}

export default App;

import React from 'react'
import ErrorBoundary from './components/common/ErrorBoundary';
import Header from './components/Header'


function App() {
    return (
        <ErrorBoundary>
            <div>
                <Header />
            </div>
        </ErrorBoundary>
    );
}

export default App;

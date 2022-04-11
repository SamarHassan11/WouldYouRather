import React from 'react'
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading'

import Header from './components/Header'
import routes from './routes'
import ErrorBoundary from './components/common/ErrorBoundary';
import Storage from './utils/storage';

import { handleGetQuestions } from './actions/questions';
import { handleGetUsers } from './actions/users';

class App extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleGetUsers());
        dispatch(handleGetQuestions());
    }

    render() {
        const loggedIn = Boolean(Storage.getItem('token'));

        return (
            <ErrorBoundary>
                <LoadingBar />
                <div>
                    {loggedIn && <Header />}
                    {routes}
                </div>
            </ErrorBoundary>
        );
    }
}

export default connect()(App);

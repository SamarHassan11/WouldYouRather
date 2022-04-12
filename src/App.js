import React from 'react'
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { requireAuthentication } from './components/common';
import Header from './components/Header'
import Login from './components/Login';
import HomePage from './components/HomePage';
import AddQuestion from './components/AddQuestion';
import LeaderBoard from './components/LeaderBoard';
import ErrorBoundary from './components/common/ErrorBoundary';
import { PageNotFound } from './components/common';
import { ROUTE_URLS } from './utils/constants';
import Storage from './utils/storage';

import { handleGetQuestions } from './actions/questions';
import { handleGetUsers } from './actions/users';
import { setAuthedUser } from './actions/authedUser';

class App extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleGetUsers());
        dispatch(handleGetQuestions());
        const username = Storage.getItem('token');
        if (username) {
            dispatch(setAuthedUser(username));
        }
    }

    render() {
        const { authedUser } = this.props;
        return (
            <ErrorBoundary>
                <Router>
                    <div>
                        <LoadingBar />
                        {authedUser && <Header />}
                        <Switch>
                            <Route exact path={ROUTE_URLS.homePage}
                                component={requireAuthentication(HomePage)
                                } />
                            <Route exact path={ROUTE_URLS.addQuestion}
                                component={AddQuestion
                                } />
                            <Route exact path={ROUTE_URLS.leaderBoard}
                                component={requireAuthentication(LeaderBoard)
                                } />
                            <Route exact path={ROUTE_URLS.login}
                                component={Login} />
                            <Route path="*" component={PageNotFound} />
                        </Switch>
                    </div>
                </Router>
            </ErrorBoundary>
        );
    }
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })

export default connect(mapStateToProps)(App);

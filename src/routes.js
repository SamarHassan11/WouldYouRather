import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { requireAuthentication } from './components/common';
import Login from './components/Login';
import HomePage from './components/HomePage';
import { PageNotFound } from './components/common';
import { ROUTE_URLS } from './utils/constants';


const AllRoutes = (
    <Switch>
        <Route exact path={ROUTE_URLS.homePage}
            component={requireAuthentication(HomePage)} />
        <Route exact path={ROUTE_URLS.login}
            component={Login} />
        <Route path="*" component={PageNotFound} />
    </Switch>
);

export default AllRoutes;

import React, { useEffect } from 'react';

import Storage from '../utils/storage';
import history from '../utils/history';
import { ROUTE_URLS } from '../utils/constants';


function Login() {
    useEffect(function () {
        const token = Storage.getItem('token');

        if (token) {
            history.push(ROUTE_URLS.homePage)
        }
    }, []);

    return (
        <div>Login</div>
    )
}

export default Login;

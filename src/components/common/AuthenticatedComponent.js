import React, { useEffect } from 'react';

import history from '../../utils/history';
import { ROUTE_URLS } from '../../utils/constants';
import Storage from '../../utils/storage';


export default (ComponentName) => {
    function AuthenticatedComponent() {
        useEffect(function () {
            const token = Storage.getItem('token');

            if (!token) {
                history.push(`${ROUTE_URLS.login}`, { redirect: window.location.href });
            }
        }, []);

        return <div><ComponentName /></div>;
    }

    return AuthenticatedComponent;
};

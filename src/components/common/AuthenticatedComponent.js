import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { ROUTE_URLS } from '../../utils/constants';
import Storage from '../../utils/storage';


const requireAuthentication = (ComponentName) => {
    function AuthenticatedComponent(props) {
        useEffect(function () {
            const token = Storage.getItem('token');

            if (!token) {
                props.history.push(ROUTE_URLS.login);
            }
        });

        return <div><ComponentName /></div>;
    }

    return withRouter(AuthenticatedComponent);
};

export default requireAuthentication;

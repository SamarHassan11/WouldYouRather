import React from 'react';

import img404 from '../../images/img-404.svg';

const PageNotFound = () => {
    return <div>
        <img src={img404} alt="Page Not Found" style={{ height: '100vh', display: 'block', margin: '0 auto' }} />
    </div>;
};

export default PageNotFound;

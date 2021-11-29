/** EXTERNALS **/

import React from 'react';
import { Link } from 'gatsby';

/** LOCALS **/

/** HELPERS **/

/** MAIN **/

const Page404 = function () {
    return (
        <div>
            404
            <p>Page not found</p>
            <Link to="/">Go back</Link>
        </div>
    );
};

export default Page404;

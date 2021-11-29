/** EXTERNALS **/

import React from 'react';
import { Link } from 'gatsby';

/** LOCALS **/

import * as styles from './Navbar.module.css';

/** HELPERS **/

const activeLinkStyle = {
    textDecoration: 'underline',
};

/** MAIN **/

const Navbar = function () {
    return (
        <div className={styles.navbar}>
            <Link to="/" className={styles.brand}>
                <h2>Gatsby Blog</h2>
            </Link>

            <div className={styles.links}>
                <Link
                    to="/"
                    className={styles.link}
                    activeStyle={activeLinkStyle}
                >
                    Home
                </Link>
                <Link
                    to="/articles"
                    className={styles.link}
                    activeStyle={activeLinkStyle}
                >
                    Articles
                </Link>
                <Link
                    to="/about"
                    className={styles.link}
                    activeStyle={activeLinkStyle}
                >
                    About
                </Link>
            </div>
        </div>
    );
};

export default Navbar;

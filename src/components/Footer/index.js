/** EXTERNALS **/

import React from 'react';

/** LOCALS **/

import * as styles from './Footer.module.css';

/** HELPERS **/

/** MAIN **/

const Footer = function () {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>Copyright {year} Daniel Rötzer</p>
        </footer>
    );
};

export default Footer;

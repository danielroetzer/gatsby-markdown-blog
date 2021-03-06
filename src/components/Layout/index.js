/** EXTERNALS **/

import React from 'react';

/** LOCALS **/

import Navbar from '../Navbar';
import Footer from '../Footer';
import * as styles from './Layout.module.css';
import '../../styles/global.css';

/** HELPERS **/

/** MAIN **/

const Layout = function ({ children }) {
    return (
        <div className={styles.layout}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;

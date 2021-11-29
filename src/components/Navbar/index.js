/** EXTERNALS **/

import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

/** LOCALS **/

import * as styles from './Navbar.module.css';

/** HELPERS **/

const query = graphql`
    query Navbar {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

const activeLinkStyle = {
    textDecoration: 'underline',
};

/** MAIN **/

const Navbar = function () {
    const { site } = useStaticQuery(query);
    const { title } = site.siteMetadata;

    return (
        <div className={styles.navbar}>
            <Link to="/" className={styles.title}>
                <h2>{title}</h2>
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

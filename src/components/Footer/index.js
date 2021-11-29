/** EXTERNALS **/

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

/** LOCALS **/

import * as styles from './Footer.module.css';

/** HELPERS **/

const query = graphql`
    query Footer {
        site {
            siteMetadata {
                author
            }
        }
    }
`;

/** MAIN **/

const Footer = function () {
    const { site } = useStaticQuery(query);
    const { author } = site.siteMetadata;
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>
                Copyright {year} {author}
            </p>
        </footer>
    );
};

export default Footer;

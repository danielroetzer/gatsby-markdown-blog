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
            <span>
                Articles generated with:{' '}
                <a
                    href="https://jaspervdj.be/lorem-markdownum/"
                    target="_blank"
                    rel="noreferrer"
                >
                    https://jaspervdj.be/lorem-markdownum/
                </a>
            </span>
            <span>
                GitHub:{' '}
                <a
                    href="https://github.com/danielroetzer/gatsby-markdown-blog"
                    target="_blank"
                    rel="noreferrer"
                >
                    https://github.com/danielroetzer/gatsby-markdown-blog
                </a>
            </span>
            <span>
                Copyright {year} {author}
            </span>
        </footer>
    );
};

export default Footer;

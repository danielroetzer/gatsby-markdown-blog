/** EXTERNALS **/

import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/** LOCALS **/

import * as styles from './Navbar.module.css';

/** HELPERS **/

const query = graphql`
    query Navbar {
        file(relativePath: { eq: "markdown-icon.png" }) {
            childImageSharp {
                fixed(height: 30) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`;

/** MAIN **/

const Navbar = function () {
    const { file, site } = useStaticQuery(query);
    const { title } = site.siteMetadata;

    return (
        <div className={styles.navbar}>
            <Link to="/" className={styles.title}>
                <Img fixed={file.childImageSharp.fixed} alt="Markdown Logo" />
                <h2>{title}</h2>
            </Link>
        </div>
    );
};

export default Navbar;

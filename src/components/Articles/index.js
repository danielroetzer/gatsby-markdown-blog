/** EXTERNALS **/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

/** LOCALS **/

import * as styles from './Articles.module.css';

/** HELPERS **/

const Article = function ({ id, frontmatter }) {
    const date = new Date(frontmatter.date).toLocaleDateString();

    return (
        <li className={styles.list_item} key={id}>
            <article>
                <header>
                    <h2 className={styles.article_title}>
                        <Link to={`/articles/${frontmatter.slug}`}>
                            {frontmatter.title}
                        </Link>
                    </h2>
                    <small className={styles.article_info}>
                        {frontmatter.author}, {date}
                    </small>
                </header>
                <section>
                    <p className={styles.article_description}>
                        {frontmatter.description}
                    </p>
                </section>
            </article>
        </li>
    );
};

/** MAIN **/

const Articles = function ({ nodes }) {
    return <ul className={styles.list_root}>{nodes.map(Article)}</ul>;
};

Articles.propTypes = {
    nodes: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            frontmatter: PropTypes.exact({
                author: PropTypes.string,
                date: PropTypes.string,
                description: PropTypes.string,
                slug: PropTypes.string,
                title: PropTypes.string,
            }),
        })
    ).isRequired,
};

export default Articles;

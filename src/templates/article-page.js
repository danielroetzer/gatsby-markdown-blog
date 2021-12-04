/** EXTERNALS **/

import React from 'react';
import { graphql } from 'gatsby';

/** LOCALS **/

import Layout from '../components/Layout';
import Seo from '../components/SEO';
import * as styles from './article.module.css';

/** HELPERS **/

export const query = graphql`
    query ArticlePage($slug: String) {
        article: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                author
                date
                description
                title
            }
        }
    }
`;

/** MAIN **/

const Article = function ({ data }) {
    const { html } = data.article;
    const { author, date, description, title } = data.article.frontmatter;

    const formattedDate = new Date(date).toLocaleDateString();

    return (
        <Layout>
            <Seo title={title} description={description} />

            <article className={styles.article}>
                <header className={styles.article_header}>
                    <h2 className={styles.article_author}>Author: {author}</h2>
                    <span className={styles.article_date}>
                        Published date: {formattedDate}
                    </span>
                </header>
                <section>
                    <div
                        dangerouslySetInnerHTML={{ __html: html }}
                        className={styles.markdown_root}
                    />
                </section>
            </article>
        </Layout>
    );
};

export default Article;

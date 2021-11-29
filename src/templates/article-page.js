/** EXTERNALS **/

import React from 'react';
import { graphql } from 'gatsby';

/** LOCALS **/

import Layout from '../components/Layout';
import Seo from '../components/SEO';

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

    return (
        <Layout>
            <Seo title={title} description={description} />

            <div>
                <h2>{title}</h2>
                <h3>
                    {author} - {date}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    );
};

export default Article;

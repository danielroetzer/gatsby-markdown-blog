/** EXTERNALS **/

import React from 'react';
import { Link, graphql } from 'gatsby';

/** LOCALS **/

import Layout from '../../components/Layout';
import Seo from '../../components/SEO';

/** HELPERS **/

export const query = graphql`
    query ArticlesPage {
        articles: allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            nodes {
                id
                frontmatter {
                    author
                    date
                    slug
                    title
                }
            }
        }
    }
`;

const Article = function (article) {
    return (
        <Link to={`/articles/${article.frontmatter.slug}`} key={article.id}>
            <section>
                <h3>{article.frontmatter.title}</h3>
                <p>{article.frontmatter.date}</p>
            </section>
        </Link>
    );
};

/** MAIN **/

const ArticlesPage = function ({ data }) {
    console.log(data);
    const articles = data.articles.nodes;

    return (
        <Layout>
            <Seo
                title="Articles"
                description="All available articles sorted by published date."
            />

            {articles.map(Article)}
        </Layout>
    );
};

export default ArticlesPage;

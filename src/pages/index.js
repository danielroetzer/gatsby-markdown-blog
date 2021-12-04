/** EXTERNALS **/

import React from 'react';
import { graphql } from 'gatsby';

/** LOCALS **/

import Layout from '../components/Layout';
import Seo from '../components/SEO';
import Articles from '../components/Articles';

/** HELPERS **/

export const query = graphql`
    query HomePage {
        articles: allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            nodes {
                id
                frontmatter {
                    author
                    date
                    description
                    slug
                    title
                }
            }
        }
    }
`;

/** MAIN **/

export default function Home({ data }) {
    return (
        <Layout>
            <Seo
                title="Home"
                description="All available articles sorted by published date."
            />

            <Articles nodes={data.articles.nodes} />
        </Layout>
    );
}

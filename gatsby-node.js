/** EXTERNALS **/

const path = require('path');

/** LOCALS **/

/** HELPERS **/

const query = `
    query CreatePages {
        articles: allMarkdownRemark {
            nodes {
                frontmatter {
                    slug
                }
            }
        }
    }
`;

/** MAIN **/

exports.createPages = async function ({ actions, graphql }) {
    const result = await graphql(query);

    if (result.error) throw new Error(result.error);

    result.data.articles.nodes.forEach(function (node) {
        actions.createPage({
            path: `/articles/${node.frontmatter.slug}`,
            component: path.resolve('./src/templates/article-page.js'),
            context: { slug: node.frontmatter.slug },
        });
    });
};

/** EXTERNALS **/

/** LOCALS **/

const package = require('./package.json');

/** HELPERS **/

/** MAIN **/

// https://www.gatsbyjs.com/docs/gatsby-config/
module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `articles`,
                path: `${__dirname}/src/articles`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/assets/img`,
            },
        },
    ],
    siteMetadata: {
        title: 'Gatsby Markdown Blog',
        titleTemplate: '%s | Gatsby Markdown Blog',
        description: 'Gatsby blog sourcing from markdown files.',
        author: package.author.name,
    },
};

/** EXTERNALS **/

/** LOCALS **/

const package = require('./package.json');

/** HELPERS **/

/** MAIN **/

// https://www.gatsbyjs.com/docs/gatsby-config/
module.exports = {
    plugins: ['gatsby-plugin-react-helmet'],
    siteMetadata: {
        title: 'Gatsby Markdown Blog',
        titleTemplate: '%s | Gatsby Markdown Blog',
        description: 'Gatsby blog sourcing from markdown files.',
        author: package.author.name,
    },
};

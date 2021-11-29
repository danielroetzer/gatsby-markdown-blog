/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: ['gatsby-plugin-react-helmet'],
    siteMetadata: {
        title: 'Gatsby Markdown Blog',
        titleTemplate: '%s | Gatsby Markdown Blog',
        description: 'Gatsby blog sourcing from markdown files.',
    },
};

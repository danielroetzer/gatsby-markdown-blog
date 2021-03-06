/** EXTERNALS **/

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

/** LOCALS **/

/** HELPERS **/

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultDescription: description
                defaultTitle: title
                titleTemplate
            }
        }
    }
`;

/** MAIN **/

// https://www.gatsbyjs.com/docs/add-seo-component/
const SEO = function (props) {
    const { site } = useStaticQuery(query);

    const { defaultDescription, defaultTitle, titleTemplate } =
        site.siteMetadata;

    const { description = defaultDescription, title = defaultTitle } = props;

    return (
        <Helmet title={title} titleTemplate={titleTemplate}>
            <meta name="description" content={description} />
        </Helmet>
    );
};

SEO.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};

export default SEO;

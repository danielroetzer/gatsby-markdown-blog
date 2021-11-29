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

SEO.defaultProps = {
    description: null,
    title: null,
};

export default SEO;

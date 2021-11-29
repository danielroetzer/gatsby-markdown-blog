/** EXTERNALS **/

import React from 'react';

/** LOCALS **/

import Layout from '../../components/Layout';
import Seo from '../../components/SEO';

/** HELPERS **/

/** MAIN **/

const AboutPage = function () {
    return (
        <Layout>
            <Seo title="About" description="About the Gatsby Markdown Blog" />
            <div>About Page</div>
        </Layout>
    );
};

export default AboutPage;

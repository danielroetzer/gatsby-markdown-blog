/** EXTERNALS **/

import React from 'react';

/** LOCALS **/

import Layout from '../../components/Layout';
import Seo from '../../components/SEO';

/** HELPERS **/

/** MAIN **/

const ArticlesPage = function () {
    return (
        <Layout>
            <Seo
                title="Articles"
                description="All available articles sorted by published date."
            />
            <div>Articles Page</div>
        </Layout>
    );
};

export default ArticlesPage;

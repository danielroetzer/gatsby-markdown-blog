/** EXTERNALS **/

import React from 'react';

/** LOCALS **/

import Layout from '../components/Layout';
import Seo from '../components/SEO';

/** HELPERS **/

/** MAIN **/

export default function Home() {
    return (
        <Layout>
            <Seo title="Home" />
            <div>Home Page</div>
        </Layout>
    );
}

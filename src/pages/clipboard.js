import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import CamBackDrop from '../components/cambackdrop/cambackdrop';

const ClipboardPage = () => (
    <Layout>
        <SEO title="Clipboard" />
        <CamBackDrop/>
    </Layout>
);

export default ClipboardPage;

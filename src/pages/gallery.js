import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import { connect } from 'react-redux';

import { changeBG } from '../state/actions';

import CaptureGallery from '../components/capturegallery/capturegallery';

const mapStateToProps = state => {
    return { bgColor: state.bgColor };
};

const mapDispatchToProps = dispatch => {
    return {
        changeBG: bgColor => dispatch(changeBG(bgColor)),
    };
};

const Gallery = ({ changeBG }) => {
    changeBG('white');

    return (
        <Layout>
            <SEO title="Home" />
            <h1>Captures</h1>
            <CaptureGallery/>
        </Layout>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);

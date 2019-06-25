import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import Settings from '../components/settings/settings';

import { connect } from 'react-redux';

import { changeBG } from '../state/actions';

const mapStateToProps = state => {
    return { bgColor: state.bgColor };
};

const mapDispatchToProps = dispatch => {
    return {
        changeBG: bgColor => dispatch(changeBG(bgColor)),
    };
};

const IndexPage = ({ changeBG }) => {
    changeBG('white');

    return (
        <Layout>
            <SEO title="Settings" />
            <h1 style={{ textAlign: 'center', margin: '50px 10px 25px' }}>
                Settings
            </h1>
            <Settings />
        </Layout>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexPage);

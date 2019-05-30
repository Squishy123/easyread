import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Image from '../components/image';
import SEO from '../components/seo';

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
            <SEO title="Tracker" />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexPage);

import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import CamBackDrop from '../components/cambackdrop/cambackdrop';

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

const ClipboardPage = ({ changeBG }) => {
    changeBG('black');
    return (
        <Layout>
            <SEO title="Clipboard" />
            <CamBackDrop />
        </Layout>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClipboardPage);

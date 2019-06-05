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

const Gallery = (props) => {
    props.changeBG('white');
    let {pathname} = props.location;
    let id = pathname.substring(pathname.lastIndexOf('/')+1);
    return (
        <Layout>
            <SEO title="Home" />
            <h1 style={{textAlign: 'center', margin: '50px 10px 25px'}}>Captures</h1>
            <CaptureGallery id={(!isNaN(id))? id : null}/>
        </Layout>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);

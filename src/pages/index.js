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
            <SEO title="Home" />
            <div
                style={{
                    margin: 'auto',
                    padding: '20px',
                    maxWidth: '400px',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <h1>EasyRead</h1>
                    <img
                        src={require('../images/easyread-logo.png')}
                        style={{ maxWidth: '100px' }}
                    />
                </div>
                <p style={{ margin: '20px 0 0 0' }}>
                    An aid for people affected by dyslexia and for those who
                    have difficulties in comprehending sentences.
                </p>
                <p style={{ margin: '20px 0 20px 0' }}>
                    Harness the power of machine learning to read books, papers
                    and more at the ease of your phone's camera.
                </p>
                <Link to="/clipboard">Get Started</Link>
            </div>
        </Layout>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexPage);

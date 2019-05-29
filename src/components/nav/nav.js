import React from 'react';

import { Link } from 'gatsby';

import { connect } from 'react-redux';

import { changeBG } from '../../state/actions';

import styles from './nav.module.scss';

import '../styles/hamburgers/hamburgers.scss';

const mapStateToProps = state => {
    return { bgColor: state.bgColor };
};

const mapDispatchToProps = dispatch => {
    return {
        changeBG: bgColor => dispatch(changeBG(bgColor)),
    };
};

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isCollapse: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({ isCollapse: !this.state.isCollapse });
    }

    render() {
        return (
            <>
                <div
                    className={`${
                        styles.menuToggle
                        } hamburger hamburger--spin ${
                        this.state.isCollapse ? 'is-active' : ''
                        }`}
                    onClick={this.toggleNav}
                    type="button"
                >
                    <span className="hamburger-box">
                        <span className={`hamburger-inner ${(this.props.bgColor == 'black') ? styles.dark : styles.light}`}/>
                    </span>
                </div>
                <div
                    className={`${styles.navContainer} ${
                        this.state.isCollapse ? styles.isActive : ''
                        }`}
                >
                    <div className={styles.nav}>
                        <div className={styles.profile}>
                            <img
                                src={require('../../images/reading-profile.png')}
                            />
                            <h1>Easyread</h1>
                            <p>Welcome back!</p>
                        </div>
                        <hr />
                        <ul className={styles.pages}>
                            {[
                                {
                                    name: 'Clipboard',
                                    url: '/clipboard',
                                },
                                ,
                                {
                                    name: 'Settings',
                                    url: '/settings',
                                },
                                {
                                    name: 'Progress Tracker',
                                    url: '/tracker',
                                },
                            ].map(e => (
                                <li key={e.url}>
                                    <Link
                                        className={styles.page}
                                        activeClassName={styles.pageActive}
                                        to={e.url}
                                    >
                                        <i className="fas fa-heart fa-2x" />
                                        <p>{e.name}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);

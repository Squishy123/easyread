import React from 'react';

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
            isCollapse: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({ isCollapse: !this.state.isCollapse });
    }

    render() {
        return (
            <div className={styles.navContainer}>
                <button class={`${styles.menuToggle} hamburger hamburger--spin ${(this.state.isCollapse) ? "is-active" : ""}`} onClick={this.toggleNav} type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner" />
                    </span>
                </button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
import React from 'react';

import { Link } from 'gatsby';

import { connect } from 'react-redux';

import { changeBG } from '../../state/actions';

import styles from './settings.module.scss';

const mapStateToProps = state => {
    return { bgColor: state.bgColor };
};

const mapDispatchToProps = dispatch => {
    return {
        changeBG: bgColor => dispatch(changeBG(bgColor)),
    };
};

class Settings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.settings}>
                <div className={styles.inputGroup}>
                    <div className={styles.inputItem}>
                        <label>Font Family</label>
                        <select name="font-family">
                            {
                                ['OpenDyslexic', 'Comic Sans MS', 'Roboto', 'Times New Roman'].map((val, i) =>
                                    <option value={val}>{val}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className={styles.inputItem}>
                        <label>Line Spacing</label>
                        <input type="range" min="1" max="100" className="slider" />
                    </div>
                    <div className={styles.inputItem}>
                        <label>Character Spacing</label>
                        <input type="range" min="1" max="100" className="slider" />
                    </div>
                    <div className={styles.inputItem}>
                        <label>Font Color</label>
                        <div className={styles.row}>
                            {['yellow', 'white', 'black', 'cyan'].map((val, i) =>
                                <div className={styles.tile} style={{ backgroundColor: val }} />)}
                        </div>
                    </div>
                    <div className={styles.inputItem}>
                        <label>Background Color</label>
                        <div className={styles.row}>
                            {['yellow', 'white', 'black', 'cyan'].map((val, i) =>
                                <div className={styles.tile} style={{ backgroundColor: val }} />)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
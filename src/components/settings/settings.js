import React from 'react';

import { Link } from 'gatsby';

import { connect } from 'react-redux';

import { changeReaderBG, changeReaderColor, changeReaderFont } from '../../state/actions';

import styles from './settings.module.scss';

const mapStateToProps = state => {
    return {
        readerFont: state.readerFont,
        readerColor: state.readerColor,
        readerBgColor: state.readerBgColor
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeReaderBG: readerBgColor => dispatch(changeReaderBG(readerBgColor)),
        changeReaderColor: readerColor => dispatch(changeReaderColor(readerColor)),
        changeReaderFont: readerFont => dispatch(changeReaderFont(readerFont)),
    };
};

class Settings extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            readerFont: props.readerFont,
            // lineSpacing: props.lineSpacing,
            // characterSpacing: props.characterSpacing,
            readerColor: props.readerColor,
            readerBgColor: props.readerBgColor
        }
    }

    render() {
        return (
            <div className={styles.settings}>
                <div className={styles.inputGroup}>
                    <div className={styles.inputItem}>
                        <label>Font Family</label>
                        <select name="font-family" onChange={(e) => { this.props.changeReaderFont(e.target.value) }}>
                            {
                                ['Arial', 'Open Dyslexic', 'Comic Sans MS', 'Roboto', 'Times New Roman'].map((val, i) =>
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
                                <div key={val} className={styles.tile} style={{ backgroundColor: val }} onClick={() => { this.props.changeReaderColor(val) }} />)}
                        </div>
                    </div>
                    <div className={styles.inputItem}>
                        <label>Background Color</label>
                        <div className={styles.row}>
                            {['yellow', 'white', 'black', 'cyan'].map((val, i) =>
                                <div key={val} className={styles.tile} style={{ backgroundColor: val }} onClick={() => { this.props.changeReaderBG(val) }} />)}
                        </div>
                    </div>
                </div>

                <h1 style={{
                    margin: '30px auto',
                    transition: '.25s linear',
                    backgroundColor: this.props.readerBgColor,
                    color: this.props.readerColor, fontFamily: this.props.readerFont
                }}>This is what Text looks like</h1>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
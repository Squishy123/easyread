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
    }

    render() {
        return (
            <div className={styles.settings}>
                <div className={styles.inputGroup}>
                    <div className={styles.inputItem}>
                        <label>Font Family</label>
                        <select style={{ fontFamily: this.props.readerFont }} value={this.props.readerFont} name="font-family" onChange={(e) => { this.props.changeReaderFont(e.target.value) }}>
                            {
                                ['Arial', 'Open Dyslexic', 'Comic Sans MS', 'Roboto', 'Times New Roman'].map((val, i) =>
                                    <option key={val} value={val} style={{ fontFamily: val }}>{val}</option>
                                )
                            }
                        </select>
                    </div>
                    {//freezebox these
                        /*
                            <div className={styles.inputItem}>
                                <label>Line Spacing</label>
                                <input type="range" min="1" max="100" className="slider" />
                            </div>
                            <div className={styles.inputItem}>
                                <label>Character Spacing</label>
                                <input type="range" min="1" max="100" className="slider" />
                            </div>
                        */
                    }
                    <div className={styles.inputItem}>
                        <label>Font Color</label>
                        <div className={styles.row}>
                            {['yellow', 'white', 'black', 'cyan'].map((val, i) =>
                                <div key={'color' + val} className={`${styles.tile} ${(this.props.readerColor == val) ? styles.selected : ''}`} style={{ backgroundColor: val }} onClick={() => { this.props.changeReaderColor(val) }} />)}
                        </div>
                    </div>
                    <div className={styles.inputItem}>
                        <label>Background Color</label>
                        <div className={styles.row}>
                            {['yellow', 'white', 'black', 'cyan'].map((val, i) =>
                                <div key={'bgColor' + val} className={`${styles.tile} ${(this.props.readerBgColor == val) ? styles.selected : ''}`} style={{ backgroundColor: val }} onClick={() => { this.props.changeReaderBG(val) }} />)}
                        </div>
                    </div>

                    <div className={styles.inputItem}>
                        <h2 style={{
                            margin: '30px auto',
                            transition: '.25s linear',
                            backgroundColor: this.props.readerBgColor,
                            color: this.props.readerColor, fontFamily: this.props.readerFont
                        }}>Hello World!</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
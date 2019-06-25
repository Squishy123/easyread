import React from 'react';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        readerBgColor: state.readerBgColor,
        readerColor: state.readerColor,
        readerFont: state.readerFont,
        readerLineHeight: state.readerLineHeight,
        readerLetterSpacing: state.readerLetterSpacing,
    };
};

class Textbox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                style={{
                    backgroundColor: this.props.readerBgColor,
                    zIndex: '1',
                    position: 'fixed',
                    top: this.props.y,
                    left: this.props.x,
                    transform: `rotate(${
                        this.props.angle ? this.props.angle : 0
                    }rad)`,
                }}
            >
                <h1
                    style={{
                        margin: 0,
                        fontSize: this.props.size,
                        color: this.props.readerColor,
                        fontFamily: this.props.readerFont,
                        lineHeight: this.props.readerLineHeight,
                        letterSpacing: `${this.props.readerLetterSpacing}px`,
                    }}
                >
                    {this.props.text}
                </h1>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(Textbox);

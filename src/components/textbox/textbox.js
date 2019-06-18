import React from 'react';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        readerBgColor: state.readerBgColor,
        readerColor: state.readerColor,
        readerFont: state.readerFont,
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
                    backgroundColor: (this.props.color && this.props.readerBgColor == 'blend') ?  `rgb(${this.props.color[0]}, ${this.props.color[1]}, ${this.props.color[2]})` : this.props.readerBgColor,
                    zIndex: '1',
                    position: 'fixed',
                    top: this.props.y,
                    left: this.props.x,
                }}
            >
                <h1
                    style={{
                        margin: 0,
                        fontSize: this.props.size,
                        color: (this.props.color && this.props.readerColor == 'blend') ? `rgb(${Math.floor(255 - this.props.color[0])}, ${Math.floor(255-this.props.color[1])}, ${Math.floor(255-this.props.color[2])})` : this.props.readerColor,
                        fontFamily: this.props.readerFont,
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

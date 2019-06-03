import React from 'react';

export default class Textbox extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div style={{ backgroundColor: 'white', zIndex: '1000', position: 'fixed', top: this.props.y, left: this.props.x }}>
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}
import React from 'react';

import styles from './cambackdrop.module.scss';

class CamBackDrop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mediaDevices: [],
            stream: ''
        }

        this.getDevices = this.getDevices.bind(this);

        this.player = React.createRef();
    }

    componentDidMount() {
        this.getDevices();
    }

    async getDevices() {
        let stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });
        //this.setState({ mediaDevices: devices});
        console.log(stream);

        this.player.current.srcObject = stream;
    }

    render() {
        return (
            <div className={styles.backdrop}>
                <video ref={this.player} autoPlay/>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

export default CamBackDrop;
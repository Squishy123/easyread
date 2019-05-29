import React from 'react';

import styles from './cambackdrop.module.scss';

class CamBackDrop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stream: '',
            facingMode: 'user'
        }

        this.player = React.createRef();

        this.getCamera = this.getCamera.bind(this);
        this.reverseCamera = this.reverseCamera.bind(this);
        this.offCamera = this.offCamera.bind(this);
    }

    async getCamera() {
        try {
            let stream = await navigator.mediaDevices.getUserMedia({
                audio: false, video: { facingMode: this.state.facingMode }
            })

            this.player.current.srcObject = stream;

            this.setState({ stream: stream });
        } catch (err) {
            console.log(err);
        }
    }

    async reverseCamera() {
        if (this.state.facingMode === 'user')
            this.setState({ facingMode: { exact: 'environment' } });
        else
            this.setState({ facingMode: 'user' });

        try {
            await this.getCamera();
        } catch (err) {
            await this.reverseCamera();
        }
    }

    async offCamera() {
        this.state.stream.getTracks()[0].stop();
        this.setState({stream: ""});
        this.player.current.srcObject = null;
    }

    render() {
        return (
            <div className={styles.backdrop}>
                <video ref={this.player} autoPlay />
                {(!this.state.stream) ? <div className={styles.prompt} onClick={this.getCamera}>
                    <h1>Turn on Camera</h1>
                </div> : null}
                <div className={styles.controls}>
                    <div className={styles.reverseCamera}>
                        <button onClick={this.offCamera}><i className="fas fa-images" /></button>
                    </div>
                    <div className={styles.reverseCamera}>
                        <button onClick={this.reverseCamera}><i className="far fa-circle" /></button>
                    </div>
                    <div className={styles.reverseCamera}>
                        <button onClick={this.reverseCamera}><i className="fas fa-sync-alt" /></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CamBackDrop;
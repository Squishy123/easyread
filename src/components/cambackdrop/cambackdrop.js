import React from 'react';

import styles from './cambackdrop.module.scss';

import { connect } from 'react-redux';

import { changeBG } from '../../state/actions';

const mapStateToProps = state => {
    return { bgColor: state.bgColor };
};

const mapDispatchToProps = dispatch => {
    return {
        changeBG: bgColor => dispatch(changeBG(bgColor)),
    };
};

class CamBackDrop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stream: '',
            facingMode: 'user',
            capture: null,
        };

        this.player = React.createRef();
        this.canvas = React.createRef();

        this.getCamera = this.getCamera.bind(this);
        this.reverseCamera = this.reverseCamera.bind(this);
        this.captureCamera = this.captureCamera.bind(this);
        this.offCamera = this.offCamera.bind(this);
    }

    componentWillUnmount() {
        this.offCamera();
    }

    async getCamera() {
        try {
            let stream = await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: { facingMode: this.state.facingMode },
            });

            this.player.current.srcObject = stream;

            this.setState({ stream: stream });
        } catch (err) {
            console.log(err);
        }
    }

    async reverseCamera() {
        if (this.state.facingMode === 'user')
            this.setState({ facingMode: { exact: 'environment' } });
        else this.setState({ facingMode: 'user' });

        try {
            await this.getCamera();
        } catch (err) {
            await this.reverseCamera();
        }
    }

    async captureCamera() {
        let ctx = this.canvas.current.getContext('2d');
        ctx.drawImage(
            this.player.current,
            0,
            0,
            this.player.current.width,
            this.player.current.height
        );

        let data = this.canvas.current.toDataURL('image/png');
        this.setState({ capture: data });

        console.log(data);
    }

    async offCamera() {
        if (this.state.stream) this.state.stream.getTracks()[0].stop();
        this.setState({ stream: '' });
        this.player.current.srcObject = null;
    }

    render() {
        return (
            <div className={styles.backdrop}>
                <video ref={this.player} autoPlay />
                <canvas ref={this.canvas} />

                {!this.state.stream ? (
                    <div
                        className={styles.prompt}
                        onClick={() => {
                            this.setState({ facingMode: 'user' });
                            this.getCamera();
                        }}
                    >
                        <h1>Turn on Camera</h1>
                    </div>
                ) : null}
                <div className={styles.controls}>
                    <div>
                        <button onClick={this.offCamera}>
                            <i className="fas fa-images" />
                        </button>
                    </div>
                    <div>
                        <button onClick={this.captureCamera}>
                            <i className="far fa-circle" />
                        </button>
                    </div>
                    <div>
                        <button onClick={this.reverseCamera}>
                            <i className="fas fa-sync-alt" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CamBackDrop);

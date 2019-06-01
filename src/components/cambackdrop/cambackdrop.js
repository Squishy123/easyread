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
            captureURL: ''
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
            this.setState({ facingMode: 'environment' });
        else this.setState({ facingMode: 'user' });

        console.log(this.state.facingMode);

        await this.offCamera();

        try {
            await this.getCamera();
        } catch (err) {
            await this.reverseCamera();
        }
    }

    async captureCamera() {
        let { width, height } = this.player.current.getBoundingClientRect();
        this.canvas.current.setAttribute('width', width);
        this.canvas.current.setAttribute('height', height);

        let ctx = this.canvas.current.getContext('2d');
        ctx.drawImage(
            this.player.current,
            0,
            0,
            width,
            height,
        );

        ctx.scale(1.35, 1);

        console.log(this.player.current.width);
        /*
        let data = await new Promise(function (resolve, reject) {
            this.canvas.current.toBlob((blob) => resolve(blob));
        }.bind(this))
        
        this.setState({ capture: data, captureURL: URL.createObjectURL(data)});

        console.log(captureURL);
        */
        this.setState({ captureURL: this.canvas.current.toDataURL() });
        console.log(this.state.captureURL);

    }

    async offCamera() {
        if (this.state.stream)
            this.state.stream.getTracks()[0].stop();
        this.setState({ stream: '' });
        this.player.current.srcObject = null;
    }

    render() {
        return (
            <div className={styles.backdrop}>
                <img src={this.state.capture} />
                {/*rotation only works well for mobile -> todo fix*/}
                <video ref={this.player} autoPlay style={{
                    transform: `rotateY(${(this.state.facingMode === 'user') ? '180' : '0'}deg)`
                }} />
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

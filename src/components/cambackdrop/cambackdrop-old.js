import React from 'react';

import styles from './cambackdrop.module.scss';

import { connect } from 'react-redux';

import { changeReaderBG, changeReaderColor } from '../../state/actions';

import Textbox from '../textbox/textbox';

const CV_BASE = `https://eastus.api.cognitive.microsoft.com/vision/v2.0/recognizeText?mode=Printed`;
const CV_KEY = process.env.GATSBY_AZURE_API_KEY;

const mapStateToProps = state => {
    return {
        readerBgColor: state.readerBgColor,
        readerColor: state.readerColor,
        readerFont: state.readerFont,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeReaderBG: readerBgColor =>
            dispatch(changeReaderBG(readerBgColor)),
    };
};

class CamBackDrop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stream: '',
            facingMode: 'user',
            capture: null,
            captureURL: '',
            textBoxes: [],
            recognitionResult: null,
        };

        this.ctx = '';

        this.player = React.createRef();
        this.canvas = React.createRef();

        this.getCamera = this.getCamera.bind(this);
        this.reverseCamera = this.reverseCamera.bind(this);
        this.captureFrame = this.captureFrame.bind(this);
        this.offCamera = this.offCamera.bind(this);
        this.getCV = this.getCV.bind(this);
        this.init = this.init.bind(this);

        this.frameCount = 0;
        this.textGroup = '';
    }

    init() {
        let { width, height } = this.player.current.getBoundingClientRect();
        this.width = width;
        this.height = height;
        this.canvas.current.setAttribute('width', width);
        this.canvas.current.setAttribute('height', height);
        this.ctx = this.canvas.current.getContext('2d');
        console.log(this.ctx);
        this.ctx.globalCompositeOperation = 'difference';
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

            await new Promise((res, rej) => {
                setTimeout(() => {
                    this.init();
                    res();
                }, 1000);
            });
            setInterval(this.captureFrame, 100);
        } catch (err) {
            console.log(err);
        }
    }

    async reverseCamera() {
        if (this.state.facingMode === 'user')
            this.setState({ facingMode: 'environment' });
        else this.setState({ facingMode: 'user' });

        await this.offCamera();

        try {
            await this.getCamera();
        } catch (err) {
            await this.reverseCamera();
        }
    }

    checkMoved(imageData) {
        let imageScore = 0;
        for (let i = 0; i < imageData.data.length; i += 4) {
            let r = imageData.data[i] / 3;
            let g = imageData.data[i + 1] / 3;
            let b = imageData.data[i + 2] / 3;
            let pixelScore = r + g + b;

            if (pixelScore >= 32) imageScore++;
        }
        //console.log(imageScore);
        if (imageScore >= 30000) return true;

        return false;
    }

    async captureFrame() {
        if (this.frameCount % 2 == 0) {
            this.ctx.globalCompositeOperation = 'difference';
        } else {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.drawImage(this.player.current, 0, 0);
            //this.ctx.globalCompositeOperation = 'source-over';
        }

        let imgData = await this.ctx.getImageData(
            0,
            0,
            this.width,
            this.height
        );
        if (this.checkMoved(imgData) && this.frameCount % 2 != 0) {
            let data = await this.canvas.current.toDataURL('image/jpeg');
            this.setState({ captureURL: data });
            //await this.getCV();
        }
        this.frameCount++;
    }

    async offCamera() {
        if (this.state.stream) this.state.stream.getTracks()[0].stop();
        this.setState({ stream: '' });
        this.player.current.srcObject = null;
    }

    async getCV() {
        let params = {
            mode: 'Printed',
        };

        let strParams = '?';
        Object.keys(params).forEach(k => {
            strParams += `${k}=${params[k]}&`;
        });

        //turn image into arr
        let data = this.state.captureURL.split(',')[1];
        let mimeType = this.state.captureURL.split(';')[0].slice(5);

        let bytes = window.atob(data);
        let buf = new ArrayBuffer(bytes.length);
        let byteArr = new Uint8Array(buf);

        for (let i = 0; i < bytes.length; i++) {
            byteArr[i] = bytes.charCodeAt(i);
        }

        let res = await fetch(CV_BASE /*+ strParams*/, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Ocp-Apim-Subscription-Key': CV_KEY,
            },
            //data: this.state.captureURL,
            body: byteArr,
        });

        let loc = res.headers.get('Operation-Location');
        let result;
        do {
            result = await fetch(loc, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Ocp-Apim-Subscription-Key': CV_KEY,
                },
            });

            result = await result.json();
            //console.log(result.status);
        } while (result.status != 'Succeeded');

        console.log(result);

        //draw boxes
        let cachedText = '';
        if (result && result.recognitionResult) {
            this.setState({ textBoxes: [] });

            for (let i = 0; i < result.recognitionResult.lines.length; i++) {
                let line = result.recognitionResult.lines[i];
                cachedText += line.text;

                let coords = line.boundingBox;

                let offset = this.canvas.current.getBoundingClientRect();
                this.setState({
                    textBoxes: this.state.textBoxes.concat([
                        {
                            str: line.text,
                            el: (
                                <Textbox
                                    key={line.text}
                                    x={coords[6] + offset.x}
                                    y={
                                        coords[7] +
                                        offset.y -
                                        Math.abs(coords[1] - coords[7])
                                    }
                                    text={line.text}
                                    size={Math.abs(coords[1] - coords[7])}
                                />
                            ),
                        },
                    ]),
                });
            }

            //if(strSimilarity.compareTwoStrings(cachedText, this.textGroup) >
            this.textGroup = cachedText;
        }
    }

    render() {
        return (
            <div className={styles.backdrop}>
                {this.state.textBoxes.map(e => e.el)}
                {/*<img src={this.state.captureURL} />*/}
                {/*rotation only works well for mobile -> todo fix*/}
                <video
                    ref={this.player}
                    autoPlay
                    style={{
                        transform: `translate(-50%, -50%) rotateY(${
                            this.state.facingMode === 'user' && false
                                ? '180'
                                : '0'
                        }deg)`,
                    }}
                />
                <canvas
                    ref={this.canvas}
                    style={{ transform: `translate(-50%, -50%)` }}
                />

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
                        <button
                            onClick={() => {
                                this.player.current.pause();
                                clearInterval(this.capture);
                                this.captureFrame();
                            }}
                        >
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

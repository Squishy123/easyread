import React from 'react';

import styles from './cambackdrop.module.scss';

import { connect } from 'react-redux';

import { changeReaderBG, changeReaderColor } from '../../state/actions';

import Textbox from '../textbox/textbox';

const mapStateToProps = state => {
    return { readerBgColor: state.readerBgColor, readerColor: state.readerColor, readerFont: state.readerFont };
};

const mapDispatchToProps = dispatch => {
    return {
        changeReaderBG: readerBgColor => dispatch(changeReaderBG(readerBgColor)),
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
            textBoxes: []
        };

        this.player = React.createRef();
        this.canvas = React.createRef();

        this.getCamera = this.getCamera.bind(this);
        this.reverseCamera = this.reverseCamera.bind(this);
        this.captureCamera = this.captureCamera.bind(this);
        this.offCamera = this.offCamera.bind(this);
        this.getCV = this.getCV.bind(this);
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
        );

        console.log(this.player.current.width);
        /*
        let data = await new Promise(function (resolve, reject) {
            this.canvas.current.toBlob((blob) => resolve(blob));
        }.bind(this))
        
        this.setState({ capture: data, captureURL: URL.createObjectURL(data)});

        console.log(captureURL);
        */
        let data = await this.canvas.current.toDataURL("image/jpeg");
        this.setState({ captureURL: data });
        console.log(this.state);

        await this.getCV();

    }

    async offCamera() {
        if (this.state.stream)
            this.state.stream.getTracks()[0].stop();
        this.setState({ stream: '' });
        this.player.current.srcObject = null;
    }

    async getCV() {
        let key = process.env.GATSBY_AZURE_API_KEY;
        let base = `https://eastus.api.cognitive.microsoft.com/vision/v2.0/recognizeText?mode=Printed`;
        let params = {
            //"visualFeatures": "Categories,Description,Color",
            // "details": "",
            "mode": "Printed",
        };

        let strParams = "?";
        Object.keys(params).forEach((k) => {
            strParams += `${k}=${params[k]}&`;
        });

        console.log(strParams);

        //turn image into arr
        let data = this.state.captureURL.split(',')[1];
        let mimeType = this.state.captureURL.split(';')[0].slice(5);

        let bytes = window.atob(data);
        let buf = new ArrayBuffer(bytes.length);
        let byteArr = new Uint8Array(buf);

        for (let i = 0; i < bytes.length; i++) {
            byteArr[i] = bytes.charCodeAt(i);
        }

        let res = await fetch(base /*+ strParams*/, {
            method: 'POST',
            headers: {
                "Content-Type": "application/octet-stream",
                "Ocp-Apim-Subscription-Key": key
            },
            //data: this.state.captureURL,
            body: byteArr
        });

        let loc = res.headers.get('Operation-Location');
        let result;
        do {
            result = await fetch(loc, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Ocp-Apim-Subscription-Key": key
                },
            });

            result = await result.json();
            console.log(result.status);
        } while (result.status != "Succeeded")

        console.log(result);

        //draw boxes 
        let ctx = this.canvas.current.getContext('2d');
        if (result && result.recognitionResult)
            result.recognitionResult.lines.forEach((line) => {
                let coords = line.boundingBox;
                /*ctx.fillStyle = 'white';
                ctx.beginPath();
                ctx.moveTo(coords[0], coords[1]);
                ctx.lineTo(coords[2], coords[3]);
                ctx.lineTo(coords[4], coords[5]);
                ctx.lineTo(coords[6], coords[7]);
                ctx.closePath();
                ctx.fill();
                */

                //ctx.font = `${Math.abs(coords[1] - coords[7])}px ${this.props.readerFont}`;
                let offset = this.canvas.current.getBoundingClientRect();
                /*let [width, height] = [ctx.measureText(line.text).width + 15, Math.abs(coords[1] - coords[7]) + 15];
                ctx.fillStyle = this.props.readerBgColor;
                ctx.fillRect(coords[0], coords[1], width, height);
                ctx.fillStyle = this.props.readerColor;
                ctx.fillText(line.text, coords[6], coords[7]);
                */
                this.setState({ textBoxes: this.state.textBoxes.concat([<Textbox key={line.text} x={coords[6] + offset.x} y={coords[7] + offset.y - Math.abs(coords[1] - coords[7])} text={line.text} size={Math.abs(coords[1] - coords[7])} />]) });
            })
    }

    render() {
        return (
            <div className={styles.backdrop}>
                {this.state.textBoxes}
                {/*<img src={this.state.captureURL} />*/}
                {/*rotation only works well for mobile -> todo fix*/}
                <video ref={this.player} autoPlay style={{
                    transform: `translate(-50%, -50%) rotateY(${(this.state.facingMode === 'user') ? '180' : '0'}deg)`
                }} />
                <canvas ref={this.canvas} style={{ transform: `translate(-50%, -50%)` }} />

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

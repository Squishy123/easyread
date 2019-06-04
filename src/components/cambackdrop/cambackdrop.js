import React from 'react';

import styles from './cambackdrop.module.scss';

import Textbox from '../textbox/textbox';

const CV_BASE = 'https://eastus.api.cognitive.microsoft.com/vision/v2.0/recognizeText?mode=Printed';
const CV_KEY = process.env.GATSBY_AZURE_API_KEY;

export default class CamBackDrop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mediaStream: null,
            facingMode: 'user',
            captureURL: '',
            textBoxes: [],
            recognitionResult: null,
            cachedText: '',
            loading: false
        }

        //temp 
        this.ctx = null;
        this.width = 0;
        this.height = 0;
        this.frameCount = 0;

        this.loop = null;
        this.init = null;

        //ref
        this.player = React.createRef();
        this.canvas = React.createRef();

        //functs
        this.initCanvas = this.initCanvas.bind(this);
        this.initCamera = this.initCamera.bind(this);
        this.reverseCamera = this.reverseCamera.bind(this);
        this.offCamera = this.offCamera.bind(this);
        this.captureFrame = this.captureFrame.bind(this);
        this.getCV = this.getCV.bind(this);
        this.genText = this.genText.bind(this);
        this.captureImage = this.captureImage.bind(this);
    }

    //init dimensions and context
    initCanvas() {
        let bounds = this.player.current.getBoundingClientRect();
        this.width = bounds.width;
        this.height = bounds.height;
        this.canvas.current.setAttribute('width', this.width);
        this.canvas.current.setAttribute('height', this.height);
        this.ctx = this.canvas.current.getContext('2d');
    }

    //get media and setup canvas
    async initCamera() {
        //reset textboxes and cache
        this.setState({ textBoxes: [], cachedText: '' });

        try {
            let stream = await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: { facingMode: this.state.facingMode }
            });

            this.player.current.srcObject = stream;
            this.setState({ mediaStream: stream });

            //init canvas
            await new Promise((res, rej) => {
                this.setState({ loading: true });
                this.init = setTimeout(() => {
                    this.initCanvas();
                    this.setState({ loading: false });
                    res();
                }, 1000);
            });
            //init capture
            this.loop = setInterval(async () => {
                await this.captureFrame();
                await this.getCV();
                await this.genText();
            }, 250)
        } catch (err) {
            console.log(err);
        }
    }

    async reverseCamera() {
        this.setState({ facingMode: (this.state.facingMode === 'user') ? 'environment' : 'user' });

        await this.offCamera();

        //attempt reverse
        try {
            await this.initCamera();
        } catch (err) {
            await this.reverseCamera();
        }
    }

    async offCamera() {
        clearTimeout(this.init);
        clearInterval(this.loop);

        if (this.state.mediaStream)
            await this.state.mediaStream.getTracks()[0].stop();

        this.setState({ mediaStream: null });
        //this.player.current.srcObject = null;
    }

    //capture frames and run analysis
    async captureFrame() {
        this.ctx.drawImage(this.player.current, 0, 0);

        let captureURL = await this.canvas.current.toDataURL('image/jpeg');
        this.setState({ captureURL: captureURL });

        this.frameCount++;
    }

    //chunks data url for payloading
    chunkDataURL(dataURL) {
        let data = dataURL.split(',')[1];
        let mimeType = dataURL.split(';')[0].slice(5);

        let bytes = window.atob(data);
        let buf = new ArrayBuffer(bytes.length);
        let byteArr = new Uint8Array(buf);

        for (let i = 0; i < bytes.length; i++) {
            byteArr[i] = bytes.charCodeAt(i);
        }

        return byteArr;
    }

    //chain 2 requests to get analysis
    async getCV() {
        let chunkedData = this.chunkDataURL(this.state.captureURL);

        let jobRes = await fetch(CV_BASE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Ocp-Apim-Subscription-Key': CV_KEY
            },
            body: chunkedData
        });

        let CVRes;
        do {
            CVRes = await fetch(jobRes.headers.get('Operation-Location'), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Ocp-Apim-Subscription-Key': CV_KEY
                }
            }).then(async res => await res.json());
        } while (CVRes.status != 'Succeeded');
        console.log(CVRes)
        this.setState({
            recognitionResult: CVRes.recognitionResult
        });
    }

    //generate textboxes and cache text
    async genText() {
        //clear textboxes and text
        this.setState({ textBoxes: [], cachedText: '' });

        let cachedText = '';
        this.state.recognitionResult.lines.forEach((line) => {
            cachedText += line.text + '\n';
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
        })
        this.setState({
            cachedText: cachedText
        });
    }

    //captures and writes to image
    async captureImage() {
        this.player.current.pause();
        await this.offCamera();

        //run 1 more time
        if (this.ctx) {
            await this.captureFrame();
            await this.getCV();
            await this.genText();
        }

        console.log(this.state);
    }

    componentWillUnmount() {
        this.offCamera();
    }

    render() {
        return (
            <div className={styles.backdrop}>
                {(this.state.loading) ? <div className={styles.loader}>
                    <h1>Loading...</h1>
                </div> : null}
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

                {!this.state.mediaStream ? (
                    <div
                        className={styles.prompt}
                        onClick={() => {
                            this.setState({ facingMode: 'user' });
                            this.initCamera();
                        }}
                    >
                        <p>Turn on Camera</p>
                    </div>
                ) : null}
                <div className={styles.controls}>
                    <div>
                        <button onClick={this.offCamera}>
                            <i className="fas fa-images" />
                        </button>
                    </div>
                    <div>
                        <button onClick={this.captureImage}>
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
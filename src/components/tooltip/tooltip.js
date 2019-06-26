import React from 'react';

import styles from './tooltip.module.scss';

import { connect } from 'react-redux';

import { saveTextToSpeechToken } from '../../state/actions';

const mapStateToProps = state => {
    return {
        ttsToken: state.ttsToken,
        tokenTimestamp: state.tokenTimestamp,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveTextToSpeechToken: token => dispatch(saveTextToSpeechToken(token)),
    };
};

const TOKEN_BASE =
    'https://cors-anywhere.herokuapp.com/https://eastus.api.cognitive.microsoft.com/sts/v1.0/issueToken';
const SPEECH_BASE = `https://eastus.tts.speech.microsoft.com/cognitiveservices/v1`;
const AZURE_KEY = process.env.GATSBY_AZURE_API_KEY;

const WORDS_HOST = `https://wordsapiv1.p.rapidapi.com/words`;
const WORDS_KEY = process.env.WORDS_API_KEY;

class ToolTip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tipState: 'null',
            textAnalysis: null,
            speech: null,
        };

        this.getText = this.getText.bind(this);
        this.getSpeech = this.getSpeech.bind(this);
    }

    async getText() {
        let res = await fetch(`${WORDS_HOST}/${this.props.text}`, {
            method: 'GET',
            headers: {
                'X-Mashape-Key': WORDS_KEY,
            },
        }).then(async res => await res.json());

        console.log(res);

        if (res.success != false) {
            let syllables;
            if (res.syllables) {
                syllables = res.syllables.list.reduce(
                    (acc, e) => acc + ' ' + e
                );
                console.log(syllables);
            }
            this.setState({
                textAnalysis: (
                    <div className={styles.textAnalysis}>
                        {syllables ? (
                            <>
                                <p>Syllables: {res.syllables.count}</p>
                                <p>{syllables}</p>
                            </>
                        ) : null}

                        {res.pronunciation && res.pronunciation.all ? (
                            <p>Pronunciation: {res.pronunciation.all}</p>
                        ) : null}

                        {res.results && res.results.length ? (
                            <>
                                <p>Definition:</p>
                                <p>{res.results[0].definition}</p>
                            </>
                        ) : null}
                    </div>
                ),
            });
        } else {
            this.setState({
                textAnalysis: (
                    <div className={styles.textAnalysis}>
                        <p>Word not found!</p>
                    </div>
                ),
            });
        }
    }

    async getSpeech() {
        console.log(AZURE_KEY);
        let diff = Math.abs(new Date() - new Date(this.props.tokenTimestamp));
        console.log(diff);
        if (!this.props.ttsToken || diff > 540000) {
            console.log('getting new token!');
            let res = await fetch(TOKEN_BASE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-length': 0,
                    'Ocp-Apim-Subscription-Key': AZURE_KEY,
                },
            }).then(async res => await res.text());

            this.props.saveTextToSpeechToken(res);
        }

        console.log(this.props.ttsToken);

        //call tts

        let tts = await fetch(SPEECH_BASE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/ssml+xml',
                'Content-length': 0,
                Authorization: `Bearer ${this.props.ttsToken}`,
                'X-Microsoft-OutputFormat': 'audio-24khz-160kbitrate-mono-mp3',
            },
            body: `
            <speak version='1.0' xml:lang='en-US'><voice xml:lang='en-US' xml:gender='Female'
            name='en-US-JessaRUS'>
                ${this.props.text}
                </voice></speak>`,
        })
            .then(async res => {
                let reader = res.body.getReader();
                let val;
                let streamer = [];
                let read;
                do {
                    read = await reader.read();
                    streamer.push(read.value);
                } while (read.done == false);

                console.log(streamer);

                async function stream(val) {
                    let blob = new Blob([val], { type: 'audio/mp3' });
                    let url = window.URL.createObjectURL(blob);
                    console.log(url);
                    let sound = new Audio(url);
                    await sound.play();

                    await new Promise((res, rej) => {
                        sound.onended = function() {
                            res();
                        };
                    });
                }

                for (let i = 0; i < streamer.length; i++) {
                    if (streamer[i])
                        try {
                            await stream(streamer[i]);
                        } catch (err) {
                            console.log(err);
                        }
                }

                /*
            console.log(val);
            let blob = new Blob([val], {type: 'audio/mpeg'});
            console.log(blob);
            let url = window.URL.createObjectURL(blob);
            console.log(url);
            let sound = new Audio(url);
            await sound.play();*/
            })
            .catch(err => console.log(err));

        //console.log(tts);
    }

    render() {
        return (
            <>
                <div
                    className={styles.toolTip}
                    style={{
                        position: 'fixed',
                        top: this.props.top,
                        left: this.props.left,
                    }}
                >
                    {this.state.textAnalysis}
                    <div className={styles.controls}>
                        <button onClick={this.getSpeech}>
                            <i className="fas fa-file-audio" />
                        </button>
                        <button onClick={this.getText}>
                            <i className="fas fa-align-left" />
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToolTip);

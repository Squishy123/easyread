import React from 'react';

import styles from './capturegallery.module.scss';

import { Link, navigate } from 'gatsby';

import Textbox from '../textbox/textbox';

import ToolTip from '../tooltip/tooltip';

import * as store from 'store';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        readerBgColor: state.readerBgColor,
        readerColor: state.readerColor,
        readerFont: state.readerFont,
        readerLineHeight: state.readerLineHeight,
        readerLetterSpacing: state.readerLetterSpacing,
    };
};

class CaptureGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textBoxes: [],
            cachedText: '',
            toolTip: null,
            imgLoaded: false,
            textView: false,
            captures: store.get('captures'),
        };

        if (this.state.captures && this.state.captures.length)
            this.state.captures = this.state.captures.reverse();

        this.original = React.createRef();
        this.imgLoad = this.imgLoad.bind(this);
        this.selectText = this.selectText.bind(this);
    }

    selectText(e) {
        //this.setState({toolTip: null})
        let selection = window.getSelection();
        if (selection.toString().length > 0) {
            this.setState({ toolTip: null });
            let rect = selection.getRangeAt(0).getBoundingClientRect();
            this.setState({
                toolTip: (
                    <ToolTip
                        removeToolTip={() => {
                            this.setState({ toolTip: null });
                        }}
                        text={selection.toString()}
                        top={rect.top - 35}
                        left={rect.left}
                    />
                ),
            });
        }
    }

    imgLoad() {
        this.setState({ textBoxes: [] });
        let temp = [];
        let cachedText = [];
        this.state.captures[this.props.id].recognitionResult.lines.forEach(
            line => {
                cachedText.push(
                    <p
                        key={line.text}
                        onMouseDown={e => {
                            this.selectText(e);
                        }}
                        onTouchStart={e => {
                            this.selectText(e);
                        }}
                        style={{
                            fontSize: this.props.size,
                            color: this.props.readerColor,
                            fontFamily: this.props.readerFont,
                            lineHeight: this.props.readerLineHeight,
                            letterSpacing: `${
                                this.props.readerLetterSpacing
                            }px`,
                        }}
                    >
                        {line.text}
                    </p>
                );

                let angle = Math.atan2(
                    line.boundingBox[3] - line.boundingBox[1],
                    line.boundingBox[2] - line.boundingBox[0]
                );
                console.log((angle * 180) / Math.PI);

                line.words.forEach(word => {
                    let coords = word.boundingBox;
                    let offset = this.original.current.getBoundingClientRect();

                    temp.push({
                        str: word.text,
                        el: (
                            <Textbox
                                key={word.text + Math.random()}
                                x={coords[6] + offset.x}
                                y={
                                    coords[7] +
                                    offset.y -
                                    Math.abs(coords[1] - coords[7])
                                }
                                text={word.text}
                                size={Math.abs(coords[1] - coords[7])}
                                angle={angle}
                            />
                        ),
                    });
                });
            }
        );
        this.setState({
            textBoxes: temp,
            cachedText: cachedText,
            imgLoaded: true,
        });
        console.log(cachedText);
    }

    render() {
        if (this.props.id) {
            return (
                <>
                    {this.state.textView ? (
                        <div className={styles.textView}>
                            <h1
                                style={{
                                    textAlign: 'center',
                                    margin: '50px 10px 25px',
                                }}
                            >
                                TextView
                            </h1>
                            <div
                                style={{
                                    padding: '20px',
                                    backgroundColor: this.props.readerBgColor,
                                }}
                            >
                                {this.state.toolTip}
                                {this.state.cachedText}
                            </div>
                        </div>
                    ) : null}

                    {this.state.textBoxes.map(e => e.el)}
                    <div className={styles.single}>
                        {
                            <img
                                ref={this.original}
                                src={
                                    this.state.captures[this.props.id]
                                        .originalImage
                                }
                                onLoad={this.imgLoad}
                            />
                        }
                    </div>
                    <div className={styles.controls}>
                        <div>
                            <button
                                onClick={() => {
                                    this.setState({ textView: false });
                                    if (this.props.id > 0)
                                        navigate(
                                            `/gallery/${Number(this.props.id) -
                                                1}`
                                        );
                                }}
                            >
                                <i className="fas fa-arrow-left" />
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    this.setState({ textView: false });
                                    navigate('/gallery');
                                }}
                            >
                                <i className="fas fa-images" />
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    if (this.state.imgLoaded == true)
                                        this.setState({
                                            textView: !this.state.textView,
                                        });
                                }}
                            >
                                <i className="fas fa-file-alt" />
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    this.setState({ textView: false });
                                    if (
                                        this.props.id <
                                        this.state.captures.length - 1
                                    )
                                        navigate(
                                            `/gallery/${Number(this.props.id) +
                                                1}`
                                        );
                                }}
                            >
                                <i className="fas fa-arrow-right" />
                            </button>
                        </div>
                    </div>
                </>
            );
        }

        return (
            <div className={styles.gallery}>
                {this.state.captures ? (
                    <>
                        {this.state.captures.map((capture, i) => (
                            <Link to={`/gallery/${i}`} key={`capture-${i}`}>
                                <img src={capture.renderImage} />
                            </Link>
                        ))}
                        <div className={styles.controls}>
                            <button
                                onClick={() => {
                                    store.clearAll();
                                    window.location.reload();
                                }}
                            >
                                <h3>Clear Gallery</h3>
                            </button>
                        </div>
                    </>
                ) : (
                    <h3>No Captures here...</h3>
                )}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(CaptureGallery);

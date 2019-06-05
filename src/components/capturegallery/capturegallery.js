import React from 'react';

import styles from './capturegallery.module.scss';

import { Link, navigate } from 'gatsby';

import Textbox from '../textbox/textbox';

import * as store from 'store';

export default class CaptureGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textBoxes: [],
            captures: store.get('captures'),
        };

        if (this.state.captures && this.state.captures.length)
            this.state.captures = this.state.captures.reverse();

        this.original = React.createRef();
        this.imgLoad = this.imgLoad.bind(this);
    }

    imgLoad() {
        this.setState({ textBoxes: [] });
        let temp = [];
        this.state.captures[this.props.id].recognitionResult.lines.forEach(
            line => {
                let coords = line.boundingBox;
                let offset = this.original.current.getBoundingClientRect();

                temp.push({
                    str: line.text,
                    el: (
                        <Textbox
                            key={line.text + Math.random()}
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
                });
            }
        );
        this.setState({ textBoxes: temp });
    }

    render() {
        if (this.props.id) {
            return (
                <>
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
                            <button onClick={() => {
                                        navigate('/gallery');
                                }}>
                                <i className="fas fa-images" />
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => {
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
                        <button onClick={()=> {
                            store.clearAll();
                            window.location.reload();
                        }}><h3>Clear Gallery</h3></button>
                    </div>
                    </>
                ) : (
                    <h3>No Captures here...</h3>
                )}
            </div>
        );
    }
}

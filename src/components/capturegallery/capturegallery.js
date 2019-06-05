import React from 'react';

import styles from './capturegallery.module.scss';

import { Link } from 'gatsby';

import Textbox from '../textbox/textbox';

export default class CaptureGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textBoxes: [],
            captures: JSON.parse(window.localStorage.getItem('captures')).reverse()
        }

        this.original = React.createRef();
        this.imgLoad = this.imgLoad.bind(this);
    }

    imgLoad() {
        this.setState({textBoxes: []});

        this.state.captures[this.props.id].recognitionResult.lines.forEach((line) => {
            let coords = line.boundingBox;
            let offset = this.original.current.getBoundingClientRect();
            console.log(line);
            let temp = this.state.textBoxes;
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

            this.setState({textBoxes: temp});
        });
    }

    render() {
        if(this.props.id) {
            return (
                <div className={styles.single}>
                    {this.state.textBoxes.map(e => e.el)}
                    {
                    <img ref={this.original} src={this.state.captures[this.props.id].originalImage} 
                    onLoad={this.imgLoad}/>
                    }    
                </div>
            )
        }
           
        
            return (
                <div className={styles.gallery}>
                    {
                        this.state.captures.map((capture, i) => 
                            <Link to={`/gallery/${i}`} key={`capture-${i}`}>
                                <img src={capture.renderImage}/>
                            </Link>)
                    }    
                </div>
            )

    }
}


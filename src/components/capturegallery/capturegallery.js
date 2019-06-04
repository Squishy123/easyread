import React from 'react';

import styles from './capturegallery.module.scss';

export default class CaptureGallery extends React.Component {
    
    render() {
        let captures = JSON.parse(window.localStorage.getItem('captures'));
        return (
            <div className={styles.gallery}>
                {
                    captures.reverse().map(capture => 
                        <img src={capture.renderImage}/>)
                }    
            </div>
        )
    }
}
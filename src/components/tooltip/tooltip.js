import React from 'react';

import styles from './tooltip.module.scss';

export default class ToolTip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tipState: 'null'
        }
    }

    render() {
        return (
            <div className={styles.toolTip} style={{
                position: 'fixed',
                top: this.props.top,
                left: this.props.left
            }}>
                <div className={styles.controls}>
                    <button>
                        <i className="fas fa-file-audio" />
                    </button>
                    <button>
                        <i className="fas fa-align-left" />
                    </button>
                </div>
            </div>)
    }
}

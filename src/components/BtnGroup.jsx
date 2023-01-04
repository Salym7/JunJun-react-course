import React, {Component} from 'react';
import cn from "classnames";

class BtnGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRight: false,
            activeLeft: false,
        }
    }

    onActive = (side) => {
        if (side === 'left') {
            this.setState(() => ({
                activeLeft: true,
                activeRight: false
            }))
        }
        if (side === 'right') {
            this.setState(() => ({
                activeLeft: false,
                activeRight: true
            }))
        }
    }

    onActiveLeft = () => this.onActive('left')
    onActiveRight = () => this.onActive('right')

    render() {
        const {activeLeft, activeRight} = this.state
        const classNamesLeft = cn(
            'btn btn-outline-primary', {
                'active': activeLeft
            }
        )
        const classNamesRight = cn(
            'btn btn-outline-primary', {
                'active': activeRight
            }
        )
        return (
            <div className="btn-group" role="group">
                <button type="button" className={classNamesLeft}
                        onClick={this.onActiveLeft}>Left
                </button>
                <button type="button" className={classNamesRight}
                        onClick={this.onActiveRight}>Right
                </button>
            </div>
        );
    }

}

export default BtnGroup;
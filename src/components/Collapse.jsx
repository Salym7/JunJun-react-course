import React from 'react';
import PropTypes from 'prop-types';
import cn from "classnames";

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: this.props.opened,
        }
    }

    onOpen = () => {
        this.setState(() => ({
            isOpened: !this.state.isOpened,
        }))
    }

    render() {
        const classNamesCollapse = cn(
            'collapse', {
                'show': this.state.isOpened
            }
        )
        return (
            <div>
                <div className="btn btn-primary m-1" data-bs-toggle="collapse" role="button"
                   aria-expanded={this.state.isOpened}
                   onClick={this.onOpen}>Link with href</div>
                <div className={classNamesCollapse}>
                    <div className="card card-body">
                        {this.props.text}
                    </div>
                </div>
            </div>
        )
    }
}

Collapse.defaultProps = {
    isOpened: true,
    text: 'Here is empty'
}

Collapse.propTypes = {
    opened: PropTypes.bool,
    text: PropTypes.string,
}

export default Collapse
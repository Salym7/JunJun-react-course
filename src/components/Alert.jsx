import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class Alert extends Component {
    render() {
        const {type, text} = this.props;

        const alertClass = cn(
            'alert' , `alert-${type}`
        )

        return (
            < div
                className={alertClass}
                role="alert"> {text}
            </div>
        );
    }
}

Alert.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
};

export default Alert;
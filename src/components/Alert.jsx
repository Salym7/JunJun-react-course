import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class Alert extends Component {
    render() {
        const {type, text} = this.props;

        const alertClass = cn(
            'alert' ,
            {
                'alert-primary' : type === 'primary',
                'alert-secondary' : type === 'secondary',
                'alert-success' : type === 'success',
                'alert-danger' : type === 'danger',
                'alert-warning' : type === 'warning',
                'alert-info' : type === 'info',
                'alert-light' : type === 'light',
                'alert-dark' : type === 'dark',
            }
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
};

export default Alert;
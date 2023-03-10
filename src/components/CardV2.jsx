import React from 'react';
import PropTypes from 'prop-types';

class CardV2 extends React.Component {

    render() {

        return (
            <div className="card">
                <div className="card-body">
                    {
                        this.props.title && <h4 className="card-title">{this.props.title}</h4>
                    }
                    {
                        this.props.text && <p className="card-text">{this.props.text}</p>
                    }
                </div>
            </div>
        )
    }
}

CardV2.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}

export default CardV2;
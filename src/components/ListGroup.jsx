import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListGroup extends Component {

    renderList(kids) {
        return kids.map(item => {
            return (
                <li key={item.toString()} className="list-group-item bg-info">{item}</li>
            )
        });
    }

    render() {
        const {children} = this.props;

        return (
            <ul className="list-group">
                {this.renderList(children)}
            </ul>
        );
    }
}

ListGroup.propTypes = {
    children : PropTypes.array
};

export default ListGroup;
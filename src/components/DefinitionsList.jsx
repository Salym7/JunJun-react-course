import React from 'react';
import PropTypes from 'prop-types';

class DefinitionsList extends React.Component {
    renderList() {
        const {data} = this.props

        return data.map(item => {
            return (
                <React.Fragment  key={item.id}>
                    <dt> {item.dt}</dt>
                    <dd> {item.dd}</dd>
                </React.Fragment>
            )
        });
    }

    render() {
        return (
            <dl>
                {this.renderList()}
            </dl>
        )
    }
}

DefinitionsList.propTypes = {
    data: PropTypes.object,
}

export default DefinitionsList;
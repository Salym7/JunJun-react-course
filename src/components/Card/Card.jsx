import React from 'react';
import Title from "./Title";
import Text from "./Text";
import Body from "./Body";

class Card extends React.Component {
    static Body = Body;
    static Title = Title;
    static Text = Text;

    render() {
        return <div className="card m-5">{this.props.children}</div>;
    }
}

export default Card;
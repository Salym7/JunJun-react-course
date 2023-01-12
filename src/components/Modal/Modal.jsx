import React from 'react';

import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

class Modal extends React.Component {

    static Body = Body;
    static Header = Header;
    static Footer = Footer;

    render() {
        const clazz = `modal bg-modal-component ${this.props.isOpen ? 'd-block' : 'modal fade show d-none'}`;

        return (
            <div className={clazz} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;

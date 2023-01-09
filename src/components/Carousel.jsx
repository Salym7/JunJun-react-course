import React, {Component} from 'react';
import PropTypes from "prop-types";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
        }
    };

    render() {
        console.log(this.props.images);
        console.log(this.props.images[1])
        return (
            <>
                <img className="d-block w-100" src={this.props.images[1].slide2} alt={'slide'}/>
            </>
            // <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            //     <div className="carousel-inner">
            //         <div className="carousel-item active">
            //             <img className="d-block w-100" src={"../assets/slide2.jpg"} alt={'slide'} />
            //             {/*<img alt="" className="d-block w-100" src="./assets/slide2.jpg">*/}
            //         </div>
            //         <div className="carousel-item">
            //             {/*<img alt="" className="d-block w-100" src="/images/second.jpeg">*/}
            //         </div>
            //         <div className="carousel-item">
            //             {/*<img alt="" className="d-block w-100" src="/images/third.jpeg">*/}
            //         </div>
            //     </div>
            //     <button className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev">
            //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            //         <span className="visually-hidden">Previous</span>
            //     </button>
            //     <button className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next">
            //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
            //         <span className="visually-hidden">Next</span>
            //     </button>
            // </div>
        );
    }
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired
}

export default Carousel;
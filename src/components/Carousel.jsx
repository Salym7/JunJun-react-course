import React, {Component} from 'react';
import PropTypes from "prop-types";
import cn from "classnames";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexImg: 2,
        }
    };

    prevImg = () => {
        console.log(this.props.images.length);
        if (this.state.indexImg < 1) {
            this.setState({indexImg: this.props.images.length - 2})
        } else {
            this.setState({indexImg: this.state.indexImg - 1})
        }
    }
    nextImg = () => {
        if (this.state.indexImg > this.props.images.length - 2) {
            this.setState({indexImg: 0})
        } else {
            this.setState({indexImg: this.state.indexImg + 1})
        }
    }
    onChangeImg = (type) => () => {
        if (type === 'prev') this.prevImg()
        if (type === 'next') this.nextImg()
    }

    render() {
        console.log(this.props.images);
        console.log(this.props.images[1])
        const renderImg = this.props.images.map((item, index) => {
                const clazz = cn("carousel-item", {
                    'active': index === this.state.indexImg
                })
                return (
                    <div className={clazz} key={index}>
                        <img className={'carousel__img'}
                             src={item}
                             alt={'slide'}/>
                    </div>
                )
            }
        )

        return (
            <div className='container mt-5'>
                <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {renderImg}
                    </div>
                    <button className="carousel-control-prev" data-bs-target="#carousel" type="button"
                            data-bs-slide="prev"
                            onClick={this.onChangeImg('prev')}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" data-bs-target="#carousel" type="button"
                            data-bs-slide="next"
                            onClick={this.onChangeImg('next')}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired
}

export default Carousel;
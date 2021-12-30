import React from 'react';
import { Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import img1 from '../../../images/kid.jpg'
import img2 from '../../../images/kid1.jpg'
import img3 from '../../../images/kid2.jpg'

import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        height= "550px"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        height= "550px"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        height= "550px"
                    />
                </Carousel.Item>
                
            </Carousel>
        </div >
    );
};

export default Banner;
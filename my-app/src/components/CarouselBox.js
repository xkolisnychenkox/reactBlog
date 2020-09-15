import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import redSky from "../assets/sky-clouds-clouds-form-cumulus-clouds.jpg";
import japaneseSun from "../assets/pexels-photo-5115784.jpeg";
import hardJob from "../assets/pexels-photo-3736109.jpeg";

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={redSky} alt="redSky"/>
                    <Carousel.Caption>
                        <h2>Red sky</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={japaneseSun} alt="japaneseSun"/>
                    <Carousel.Caption>
                        <h2>Sun in Japan</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={hardJob} alt="hardJob"/>
                    <Carousel.Caption>
                        <h2>Hard job</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;
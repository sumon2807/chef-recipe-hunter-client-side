import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <div>
                        <img
                            className="d-block w-100"
                            src="public/assets/images/slide-4.jpg"
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <div className='w-200 h-100'>
                            <h1>DOUBLE BURGER</h1>
                            <h3>Order Now: 789-654-3210</h3>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="public/assets/images/slide-5.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>CRISPY CHICKEN</h3>
                        <p>Open Daily: 11:30PM - 8:30PM</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="public/assets/images/slide-6.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>CHICKEN FINGERS</h3>
                        <p>Enjoy the food you love FROM $6.99</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;
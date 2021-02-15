import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function Carousel_slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
            <Carousel.Item>
                <img src="img/wecoding_carousel1.png" alt="First slide" />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="img/wecoding_carousel2.png" alt="Second slide" />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="img/wecoding_carousel3.png" alt="Third slide" />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="img/wecoding_carousel4.png" alt="Third slide" />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Carousel_slider;
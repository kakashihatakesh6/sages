import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const slideImages = [
        {
            url: '/slider/aatma.png',
            caption: 'Sages Bhopalpatanam'
        },
        {
            url: '/slider/aatma2.png',
            caption: 'Sages Bhopalpatanam'
        },
        {
            url: '/slider/aatma3.png',
            caption: 'Sages Bhopalpatanam'
        },
        {
            url: '/slider/aatma4.png',
            caption: 'Sages Bhopalpatanam'
        },
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {slideImages.map((slideImage, index) => (
                    <div key={index} className="slider-item">
                        <img src={slideImage.url} alt={slideImage.caption} className="w-full h-auto" />
                        <h3 className="caption">{slideImage.caption}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent; 
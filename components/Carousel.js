import React, { useState } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Carousel2 = () => {
    const spanStyle = {
        padding: '20px',
        background: 'transparent',
        color: 'white'
    }

    const divStyle = {
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        backgroundSize: 'cover',
      }

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

        <div className="slide-container">
          
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div className="h-[300px] md:h-[100vh]" style={{...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                <span style={spanStyle}>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))}
                </Slide>
        
        </div>




    )
}

export default Carousel2;

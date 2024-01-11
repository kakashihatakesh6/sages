import React, { useState } from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const Carousel2 = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (

        <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={3000}
            bullets={false} >
            <div data-src="/slider/aatma.png" />
            <div data-src="/slider/aatma2.png" />
            <div data-src="/slider/aatma3.png" />
            <div data-src="/slider/aatma4.png" />

        </AutoplaySlider>


    )
}

export default Carousel2;

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './Slider.css';
import Milk from '../../images/milk.png';
import Lemon from '../../images/lemon.png';
import One from '../../images/one.png';
import Two from '../../images/two.png';
import Three from '../../images/three.png';
import Five from '../../images/five.png';

function Slider() {
    return (
        <div className="slider">
        <OwlCarousel
        className="owl-theme"
        items="3"
        autoplay
        nav
        dots
        loop
        >
            <div className="item">
                <img src={One} alt="" />
            </div>
            <div className="item">
                <img src={Two} alt="" />
            </div>
            <div className="item">
                <img src={Three} alt="" />
            </div>
            <div className="item">
                <img src={Lemon} alt="" />
            </div>
            <div className="item">
                <img src={Five} alt="" />
            </div>
            <div className="item">
                <img src={Milk} alt="" />
            </div>
        </OwlCarousel>
        </div>
    )
}

export default Slider

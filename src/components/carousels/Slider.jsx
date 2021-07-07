import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './Slider.css';
import Milk from '../../images/milk.png';
import Lemon from '../../images/lemon.png'

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
                <img src={Milk} alt="" />
            </div>
            <div className="item">
                <img src={Lemon} alt="" />
            </div>
            <div className="item">
                <img src={Milk} alt="" />
            </div>
            <div className="item">
                <img src={Lemon} alt="" />
            </div>
            <div className="item">
                <img src={Milk} alt="" />
            </div>
            <div className="item">
                <img src={Lemon} alt="" />
            </div>
        </OwlCarousel>
        </div>
    )
}

export default Slider

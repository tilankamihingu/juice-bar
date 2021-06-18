import React from 'react';
import './Home.css';
import Milk from '../../images/milk.png';
import Lemon from '../../images/lemon.png';

const Home = () => {
    return (
        <div className="full">
            <div className="home-container">
                <div className="content">
                    <h1>Choose Your Juice</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, ipsum?</p>
                    <div>
                        <button type="button"><span></span> View Items</button>
                    </div>
                </div>
            </div>
            <div className="second-container">
                <div className="second-left-side">
                    <div className="second-left-details">
                        <p>get your energy drink</p>
                        <h1>Juice</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia recusandae neque odit tenetur eum ipsum nesciunt amet ullam deleniti excepturi iusto quas error, perspiciatis possimus eaque sequi? Est, vitae quos?</p>
                    </div>
                    <img src={Lemon} alt="" />
                </div>
                <div className="second-right-side">
                    <div className="second-right-details">
                        <p>get your energy drink</p>
                        <h1>Juice</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia recusandae neque odit tenetur eum ipsum nesciunt amet ullam deleniti excepturi iusto quas error, perspiciatis possimus eaque sequi? Est, vitae quos?</p>
                    </div>
                    <img src={Milk} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home

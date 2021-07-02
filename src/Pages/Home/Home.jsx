import React from 'react';
import './Home.css';
import Milk from '../../images/milk.png';
import Lemon from '../../images/lemon.png';
import Mission from '../../images/banner.jpeg';
import Green from '../../images/green.jpg';
import Banner from '../../images/homeban.png';

const Home = () => {
    return (
        <div className="full">
            <div className="home-container">
                {/*<div className="content">
                    <h1>Choose Your Juice</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, ipsum?</p>
                    <div>
                        <button type="button"><span></span> View Items</button>
                    </div>
                </div>
    <img src={Green} alt="" />*/}
                <div className="home-content">
                <div className="home-left">
                    <h1>Choose Your Juice</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iste quidem, voluptate sit quo esse sunt culpa corporis amet maiores.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iste quidem, voluptate sit quo esse sunt culpa corporis amet maiores.</p>
                    <div>
                        <button type="button"><span></span>View Items</button>
                    </div>
                </div>
                <div className="home-right">
                    <img src={Banner} alt="" />
                </div>
                </div>
            </div>
            {/*---------second container-------------*/}
            <div className="second-container">
                <div className="second-left-side">
                    <div className="second-left-details">
                        <h3>get your energy drink</h3>
                        <h1>Juice</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia recusandae neque odit tenetur eum ipsum nesciunt amet ullam deleniti excepturi iusto quas error, perspiciatis possimus eaque sequi? Est, vitae quos?</p>
                        <h4>150ml pure lemon</h4>
                        <h2>See More</h2>
                    </div>
                    <img src={Lemon} alt="" />
                </div>
                <div className="second-right-side">
                    <div className="second-right-details">
                        <h3>get your energy drink</h3>
                        <h1>Juice</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia recusandae neque odit tenetur eum ipsum nesciunt amet ullam deleniti excepturi iusto quas error, perspiciatis possimus eaque sequi? Est, vitae quos?</p>
                        <h4>150ml Pure Milk</h4>
                        <h2>See More</h2>
                    </div>
                    <img src={Milk} alt="" />
                </div>
            </div>
            <div className="third-container">
                <div className="third-container-left">
                    <h3>That A Look And find out more about</h3>
                    <h1>our mission</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem quaerat in, molestiae recusandae, eveniet eligendi repellat voluptatem, rerum enim asperiores a vitae facilis nulla voluptate maiores. Cum, eveniet corporis!</p>
                    <h2>Find out more about us</h2>
                </div>
                <div className="third-container-right">
                    <img src={Mission} alt="" />
                </div>
            </div>
            <div className="fourth-container">
                <div className="fourth-container-left">
                   <img src={Mission} alt="" />
                </div>
                <div className="fourth-container-right">
                    <h3>Where Do I Buy</h3>
                    <h1>Store finder</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <div className="fourth-bottom">
                        <input type="text" placeholder="Enter the Postcode" />
                        <button className="fourth">Find Store</button>
                    </div>
                </div>
            </div>
            <div className="fifth-container">
                <div className="fifth-container-left">
                    <h3>from our blog</h3>
                    <h1>very green smooth recipe</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium exercitationem nesciunt quos possimus, expedita nisi laboriosam molestias illo hic quod veniam corporis ea? Ab, architecto aspernatur.</p>
                    <h2>Read More</h2>
                </div>
                <div className="fifth-container-right">
                    <img src={Green} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home

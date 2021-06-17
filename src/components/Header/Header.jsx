import React from 'react';
import './Header.css';
import Logo from '../../images/logo.png';
import Menu from '../../images/menu.png';
import Banner from '../../images/plan.jpg';

function Header() {
    return (
        <div className="container">
            <div className="navbar">
                <img src={Logo} alt="" className="logo" />
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                    </ul>
                </nav>
                <img src={Menu} alt="" className="menu-icon" />
            </div>
                <h1>Header</h1>
        </div>
    )
}

export default Header

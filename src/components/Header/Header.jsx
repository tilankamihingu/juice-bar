import React from 'react';
import './Header.css';
import Logo from '../../images/logo.png';
import Menu from '../../images/menu.png';
import Banner from '../../images/plan.jpg';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="container">
            <div className="navbar">
                <img src={Logo} alt="" className="logo" />
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">products</Link></li>
                        <li><Link to="#">contact Us</Link></li>
                        <li><Link to="#">Bucket</Link></li>
                    </ul>
                </nav>
                <img src={Menu} alt="" className="menu-icon" />
            </div>
                <h1>Header</h1>
        </div>
    )
}

export default Header

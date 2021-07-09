import React, {useState} from 'react';
import './Header.css';
import Logo from '../../images/logo.png';
import Menu from '../../images/menu.png';
import {Link} from 'react-router-dom';

function Header() {
   const [menu, setMenu] = useState(false)

   const toggleMenu = () =>{
       setMenu(!menu)
   }

   const styleMenu = {
       left:menu ?0 : "-100%"
   }
    return (
        <div className="container">
            <div className="navbar">
                <img src={Logo} alt="" className="logo" />
                <nav>
                    <ul style={styleMenu}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">products</Link></li>
                        <li><Link to="/contacts">contact Us</Link></li>
                        <li><Link to="/admin">Admin</Link></li>
                        <li onClick={toggleMenu}><img src={Menu} className="menu" alt="" /></li>
                    </ul>
                </nav>
                <div className="menu" onClick={toggleMenu} >
                    <img src={Menu} alt="" className="menu-icon"/>
                </div>
                
            </div>
        </div>
    )
}

export default Header

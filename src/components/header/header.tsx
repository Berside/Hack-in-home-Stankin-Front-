import React from 'react';
import './header.css';
import img from '../../imgs/logo.png';
const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <a href="https://original-website.com" className="logo-link">
                    <img src={img} alt="Logo" />
                </a>
            </div>
            <div className="header-content">
            </div>
        </header>
    );
}
export default Header;
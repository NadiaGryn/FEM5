import React, { Component } from 'react';
import './Navbar.scss'; 

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <div className='navbar__item'>
                    <p className="navbar__link">usd</p>
                    <p className="navbar__link">english</p>
                    <a href='/' className="navbar__link">help</a>
                </div>
                
                <div className='navbar__item'>
                    <a href='/' className="navbar__link navbar__link-login">login</a>
                    <a href='/' className="navbar__link navbar__link-register">register</a>
                </div>
            </div>
        );
    }
}

export default Navbar;
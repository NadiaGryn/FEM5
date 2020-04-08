import React, { Component } from 'react';
import './Header.scss';
import logo from '../../theme/Icons/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import {ShoppingCart} from '@fortawesome/free-solid-svg-icons';


class Header extends Component {
    render() {
        return (
            <div className='header'>
             <p href="/" className="header-phone"><FontAwesomeIcon icon={faMobile} className='phone-icon'/> 
             2300 - 3560 - 222</p>
            <img className="header-logo" src={logo} alt="Bazar-logo" />
            <div href="/" className="header-cart">
            <i className="fas fa-shopping-basket"></i>
            <div className="header-cart-purchase-number">0</div>
            </div>
            </div>
        );
    }
}

export default Header;
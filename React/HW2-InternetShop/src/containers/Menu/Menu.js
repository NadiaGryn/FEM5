import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <div className="menu-serch">
                    <input className="search-field" type='text' placeholder="Search products..." />
                    <i className="fas fa-search"></i>
                    
                </div>
                <div className="menu-items">
                    <a href="/" className="menu-item-link">home</a>
                    <a href="/" className="menu-item-link">slider</a>
                    <a href="/" className="menu-item-link">features</a>
                    <a href="/" className="menu-item-link">stocks</a>
                    <a href="/" className="menu-item-link">product</a>
                    <a href="/" className="menu-item-link">gallery</a>
                    <a href="/" className="menu-item-link">blog</a>                
                </div>


                
            </div>
        );
    }
}

export default Menu;
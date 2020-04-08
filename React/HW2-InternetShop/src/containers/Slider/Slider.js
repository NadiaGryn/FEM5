import React, { Component } from 'react';
import './Slider.scss';
import Sofa from '../../theme/Imges/1.jpg';

class Slider extends Component {
    render() {
        return (
            <div className='top-slider'>
                <div className="main-photo">
                <img className="sofa-img" src={Sofa} alt="Sofa"/>
                </div>

                <div className="slider-transparent-layer">
                    <h2 className="transparent-layer-tittle">indoor furniture</h2>
                    <p className="transparent-layer-text">save up to 50% of all furniture</p>
                    <button className="transparent-layer-btn">shop now</button>
                </div>
            </div>
        );
    }
}

export default Slider;
import React, { Component } from 'react';
import './Features.scss'

class Features extends Component {
    render() {
        return (
            
            <div className='features-flex'>

                <div className="features-card">                
                    <div className="ico-second-border">
                        <div className="features-ico">
                            <i className="fas fa-truck"></i></div>
                    </div>                
                <h5 className="features-title">free shipping</h5>
                <p className="features-text">all order</p>
                </div>

                <div className="features-card">                
                    <div className="ico-second-border">
                        <div className="features-ico">
                            <i className="fas fa-headphones"></i></div>
                    </div>                
                <h5 className="features-title">24/7 customer</h5>
                <p className="features-text">support</p>
                </div>

                <div className="features-card">                
                    <div className="ico-second-border">
                        <div className="features-ico">
                            <i className="fas fa-reply-all"></i></div>
                    </div>                
                <h5 className="features-title">money back</h5>
                <p className="features-text">guarantee</p>
                </div>

                <div className="features-card">                
                    <div className="ico-second-border">
                        <div className="features-ico">
                            <i className="fas fa-bullhorn"></i></div>
                    </div>                
                <h5 className="features-title">member discount</h5>
                <p className="features-text">first order</p>
                </div>

            </div>           
        );
    }
}

export default Features;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Button/Button.scss'

class Button extends Component {


    render() {
        const {text, color, classes, clickHandler} = this.props;

       return (
    
       <button className={`btn ${classes}`} style={{backgroundColor: color}} onClick={clickHandler} > {text} </button>
      
       )
    }
    
};


Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
    text: 'Click to open',
    color: '#e74c3c',
}


export default Button;
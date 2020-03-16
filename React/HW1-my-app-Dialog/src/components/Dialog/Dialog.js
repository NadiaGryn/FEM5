import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Dialog/Dialog.scss'

class Dialog extends Component {
    render() {

        const {headerText, bodyText, onClose, colorTheme } = this.props;

        const arrayActionButtons = [
            (<button className={`dialogBtn ${colorTheme[2]}`} key='ok'>Ok</button>),
            (<button className={`dialogBtn ${colorTheme[2]}`} key='cancel'>Cancel</button>)
          ];

          let dialog = (
              <div className='dialogShadow' onClick={(event) => onClose(event)}>
                <div className={`dialog`}>  
                <div className={`dialogHeader ${colorTheme[0]}`} >
                    <p>{headerText}</p>
                    <button className={`btn-close ${colorTheme[3]}`} onClick={onClose}>x</button>
                </div>
                <div className={`dialogBody ${colorTheme[1]}`}>
                    {bodyText}
                    <div className='dialogActionBtns'> 
                    {arrayActionButtons}
                </div>
                </div>
             </div>
            </div>            
          )

        return (
            <div>
                {dialog}
            </div>
        );
    }
}

Dialog.propTypes = {
    headerText: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    colorTheme: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string
    ]).isRequired
};

Dialog.defaultProps = {
    headerText: 'Do you want to save this file?',
    bodyText: 'Would you like to save this file on your computer?',
}

export default Dialog;




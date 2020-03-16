import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Button from './components/Button/Button';
import Dialog from './components/Dialog/Dialog';


class App extends Component {

  state = {
    
    isOpen1: false, 
    
    isOpen2: false, 
  };    
  
  toggleDialog1 = (event) => {
    if(event.target !== event.currentTarget) {
      return
    }
    this.setState(state => {
      return {
        isOpen1: !state.isOpen1,
      }
    })
  };

  toggleDialog2 = (event) => {
    if(event.target !== event.currentTarget) {
      return
    }
    this.setState(state => {
      return {
        isOpen2: !state.isOpen2,
      }
    })
  };

  render() {
    const {isOpen1, isOpen2} = this.state;

    let dialog1 = (
      <Dialog headerText='Do you want to save this file?'
              bodyText ='Would you like to save this file on your computer?'
              onClose = {this.toggleDialog1}
              colorTheme = {['dialogHeaderGreen', 'dialogBodyGreen', 'dialogBtnGreen', 'btn-closeGreen']}
      />   
    )

    let dialog2 = (
      <Dialog headerText='Do you want to delete this file?'
              bodyText =' Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete it?'
              onClose = {this.toggleDialog2}
              colorTheme = {['dialogHeaderRed', 'dialogBodyRed', 'dialogBtnRed', 'btn-closeRed']}
      />   
    )

  return (
    <div className="App">
    
      <Button text='Open the 1st modal' color='#32CD32' classes='btn-green btn-green:hover' clickHandler={this.toggleDialog1}></Button>
      <Button text='Open the 2nd modal' color='#e74c3c' classes='btn-red btn-red:hover' clickHandler={this.toggleDialog2}></Button>

      {isOpen1 && dialog1}
      {isOpen2 && dialog2}

    </div>
  );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './containers/Navbar/Navbar';
import Header from './containers/Header/Header';
import Menu from './containers/Menu/Menu';
import Slider from './containers/Slider/Slider';
import Features from './containers/Features/Features';
import Products from './containers/Products/Products';
import Loading from './components/Loading/Loading';




class App extends Component {

    state = {
        products: [],
        isLoaded: true,
        error: null            
    };

    componentDidMount(){
        axios('/products.json')
        .then(result => {
          this.setState({
            isLoaded: false,
            products: result.data
          });   
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      
  }

    render() {
const { products, isLoaded } = this.state;

        return (
            <div className='app-container'>
                <Navbar />
                <Header />
                <Menu />
                <Slider />
                <Features />
                <Products products={products}/>
            </div>
        );
    }
}

export default App;
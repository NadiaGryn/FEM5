import React, { Component } from 'react';
import './Products.scss';
import ProductCard from '../../components/ProductCard/ProductCard'

class Products extends Component {

    render() {

    const { products } = this.props;

    const productList = products.map((product) => (
        <ProductCard key={product.articul} product={product}/>)
    );

        return (
            <>
            <div className='products-container-name'>FURNITURE</div>            
            <div className='products-container'>
                {productList}                 
            </div>
            </>
        );
    }
}

export default Products;
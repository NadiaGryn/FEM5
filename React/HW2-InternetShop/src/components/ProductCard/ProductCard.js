import React, { Component } from 'react';
import './ProductCard.scss';

class ProductCard extends Component {
    render() {
        const { product } = this.props;        

        return (
            <div className='product-card'>
                <div className="img-bgrnd">
                    <img src={product.url} alt="Chair1" width='170px' height='250px'/>
                </div>
                <p className='product-name'>{product.name}</p>
                <div className="product-price">{product.price}$</div>
                <div className="user-choice">
                    <div className="star">Add To Favorite</div>
                    <button>Add To Cart</button>
                </div>


               
            </div>
        );
    }
}

export default ProductCard;
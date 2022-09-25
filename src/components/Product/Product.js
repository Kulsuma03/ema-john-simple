import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product, handler}) => {
    // const {product, handler} = props
    const {name, img, ratings, price, seller,} = product;
   
    return (
        <div className='product'>
           <img src={img} alt="product-image" /> 
           <div className="product-info">
              <p className='product-name'>{name}</p>
              <p>Price: ${price}</p>
              <p><small>Seller: {seller}</small></p>
              <p><small>Ratings: {ratings} stars</small></p>
           </div>
           <button className='btn-cart' onClick={()=>handler(product)}>
            <p className='btn-text'>Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>
           
        </div>
    );
};

export default Product;
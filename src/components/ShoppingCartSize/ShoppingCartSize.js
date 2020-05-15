import React from 'react';
import { Link } from 'react-router-dom';
import './shoppingcartsize.css';


function ShoppingCartSize(props) {
  const { cartSize } = props;
  return (
    <Link to="/shoppingcart">
      <button
        type="button"
        className="cart"
        data-testid="shopping-cart-button"
      >
        <p>{cartSize}</p>
      </button>
    </Link>
  );
}

export default ShoppingCartSize;

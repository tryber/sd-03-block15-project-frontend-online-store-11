import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './productcard.css';
import AddCartButton from '../AddCartButton';

class Card extends Component {
  render() {
    const { title, src, price, id, details, product, updateCart } = this.props;

    return (
      <div className="card" data-testid="product">
        <img src={src} height="200px" alt="thumbnail" />
        <div className="card-info">
          <p>{title}</p>
          <span>{`R$${price}`}</span>
          {(product.shipping.free_shipping)? 
          <span data-testid="free-shipping"><strong>Frete Grátis</strong></span> : null}
        </div>
        <div className="card-buttons">
          <Link
            data-testid="product-detail-link"
            to={`/products/${id}`}
            onClick={() => details(id)}
          >
            <button type="button">Detalhes</button>
          </Link>
          <AddCartButton
            product={product}
            updateCart={updateCart}
            datatestid="product-add-to-cart"
            buttonText="Adicionar ao Carrinho"
          />
        </div>
      </div>
    );
  }
}

export default Card;

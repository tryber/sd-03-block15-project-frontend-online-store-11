import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './productcard.css';
import AddCartButton from '../AddCartButton';

class Card extends Component {
  render() {
    const { title, src, price, id, details, product } = this.props;
    return (
      <div className="card" data-testid="product">
        <img src={src} height="200px" alt="thumbnail" />
        <div className="card-info">
          <p>{title}</p>
          <span>{`R$${price}`}</span>
        </div>
        <div className="card-buttons">
          <Link
            data-testid="product-detail-link" to={`/products/${id}`} onClick={() => details(id)}
          >
            <button>Detalhes</button>
          </Link>
          <AddCartButton product={product} />
        </div>
      </div>
    );
  }
}

export default Card;

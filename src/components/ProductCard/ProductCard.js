import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './productcard.css';

class Card extends Component {
  render() {
    const { title, src, price, id, details } = this.props;
    return (
      <div className='card' data-testid="product">
        <img src={src} height="200px" alt="thumbnail" />
        <div className='card-info'>
          <p>{title}</p>
          <span>{`R$${price}`}</span>
        </div>
        <Link data-testid="product-detail-link" to={`/products/${id}`} onClick={() => details(id)}>Detalhes</Link>
      </div>
    );
  }
}

export default Card;

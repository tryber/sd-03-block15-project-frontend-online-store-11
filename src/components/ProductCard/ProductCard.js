import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddCartButton from '../AddCartButton';
import './productcard.css';

class Card extends Component {
  render() {
    const { title, thumbnail, price, id, details } = this.props;
    return (
      <div className="card" data-testid="product">
        <img src={thumbnail} height="200px" alt="thumbnail" />
        <div className="card-info">
          <p>{title}</p>
          <span>{`R$${price}`}</span>
        </div>
        <Link
          data-testid="product-detail-link"
          to={`/products/${id}`}
          onClick={() => details(id)}
        >
          Detalhes
        </Link>
        <AddCartButton product={this.props} />
      </div>
    );
  }
}

export default Card;

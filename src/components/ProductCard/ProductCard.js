import React, { Component } from 'react';
import './productcard.css';

class Card extends Component {
  render() {
    const { title, src, price} = this.props;
    return (
      <div className='card'>
        <img src={src} height="200px" alt="thumbnail" />
        <div className='card-info'>
          <p>{title}</p>
          <span>{`R$${price}`}</span>
        </div>
      </div>
    );
  }
}

export default Card;

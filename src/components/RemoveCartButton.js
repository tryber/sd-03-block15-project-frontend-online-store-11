import React, { Component } from 'react';

class RemoveCartButton extends Component {
  constructor(props) {
    super(props);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  removeFromCart() {
    const { product, updateCart } = this.props;
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([product]));
      return updateCart();
    } if (this.checkQuantity()) {
      const products = JSON.parse(localStorage.getItem('cart'));
      localStorage.setItem('cart', JSON.stringify([...products, product]));
      return updateCart();
    }
    console.log('Estoque esgotado');
  }

  render() {   
    return (
      <button type="button" onClick={this.removeFromCart} data-testid="product-decrease-quantity">Remover</button>
    );
  }
}

export default RemoveCartButton;
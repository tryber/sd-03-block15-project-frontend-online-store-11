import React, { Component } from 'react';

class AddCartButton extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.checkQuantity = this.checkQuantity.bind(this);
  }

  addToCart() {
    const { product, updateCart } = this.props;
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([product]));
      return updateCart();
    } if (this.checkQuantity()) {
      const products = JSON.parse(localStorage.getItem('cart'));
      localStorage.setItem('cart', JSON.stringify([...products, product]));
      return updateCart();
    }
    return console.log('Sem estoque');
  }

  checkQuantity() {
    const { product } = this.props;
    const products = JSON.parse(localStorage.getItem('cart')).filter((i) => i.id === product.id);
    const quantity = product.available_quantity;
    return (products.length < quantity);
  }

  render() {
    const { datatestid, buttonText } = this.props;
    return (
      <button type="button" onClick={this.addToCart} data-testid={datatestid}>{buttonText}</button>
    );
  }
}

export default AddCartButton;

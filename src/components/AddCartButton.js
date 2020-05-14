import React, { Component } from 'react';

class AddCartButton extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.checkQuantity = this.checkQuantity.bind(this);
  }
  addToCart() {
    const { product } = this.props;
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([product]));
    } else if (this.checkQuantity()) {
      const products = JSON.parse(localStorage.getItem('cart'));
      localStorage.setItem('cart', JSON.stringify([...products, product]));
    } else {
      console.log('estoque esgotado');
    }
  }

  checkQuantity() {
    const { product } = this.props;
    const products = JSON.parse(localStorage.getItem('cart')).filter((i) => i.id === product.id);
    const quantity = product.available_quantity;
    return (products.length < quantity);
  }

  render() {
    return(
      <button type="button" onClick={this.addToCart}>Adicionar ao Carrinho</button>
    );
  }
}

export default AddCartButton;

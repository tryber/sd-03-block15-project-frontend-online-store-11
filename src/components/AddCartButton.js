import React, { Component } from 'react';

class AddCartButton extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  // addToCart() {
  //   const { product } = this.props;
  //   const totalItems = parseInt(localStorage.getItem('totalItems'), 10) || 0;
  //   const available = (product.quantity < product.available_quantity);
  //   localStorage.setItem('teste', available);
  //   // carrinho vazio
  //   if (localStorage.getItem('cart') === 'null') {
  //     product.quantity = 1;
  //     localStorage.setItem('cart', JSON.stringify([product]));
  //     localStorage.setItem('totalItems', totalItems + 1);
  //   }
  //   const cart = JSON.parse(localStorage.getItem('cart'));
  //   if (cart.includes(product.id)) {
  //     const index = cart.findIndex((item) => item.id === product.id);
  //     cart[index].quantity += 1;
  //     localStorage.setItem('totalItems', totalItems + 1);
  //     localStorage.setItem('cart', JSON.stringify(cart));
  //   }
  //   // item novo
  //   localStorage.setItem('totalItems', totalItems + 1);
  //   console.log(cart);
  //   localStorage.setItem('cart', JSON.stringify([...cart, product]));
  // }

  addToCart() {
    const { product } = this.props;
    const totalItems = parseInt(localStorage.getItem('totalItems'), 10) || 0;
    if (!localStorage.cart || localStorage.getItem('cart') === 'null') {
      localStorage.setItem('totalItems', totalItems + 1);
      localStorage.setItem('cart', JSON.stringify([product]));

    }
    const products = JSON.parse(localStorage.getItem('cart'));
    if (localStorage.cart.includes(product.id)) {
      const index = products.findIndex((item) => item.id === product.id);
      products[index].quantity += 1;
      localStorage.setItem('totalItems', totalItems + 1);
      localStorage.setItem('cart', JSON.stringify(products));
    }
    localStorage.setItem('totalItems', totalItems + 1);
    localStorage.setItem('cart', JSON.stringify([...products, product]));
  }


  render() {
    return (
      <button type="button" onClick={this.addToCart}>Adicionar ao Carrinho!</button>
    );
  }
}

export default AddCartButton;

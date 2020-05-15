import React, { Component } from 'react';

class RemoveCartButton extends Component {
  constructor(props) {
    super(props);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  removeFromCart() {
    const { product, products, updateCart } = this.props;
    const index = products.findIndex((item) => item.id === product.id);
    products.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(products));
    return updateCart();
  }


  render() {
    const { datatestid, buttonText } = this.props;
    return (
      <button type="button" onClick={this.removeFromCart} data-testid={datatestid}>{buttonText}</button>
    );
  }
}

export default RemoveCartButton;

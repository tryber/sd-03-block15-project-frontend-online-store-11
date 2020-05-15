import React, { Component } from 'react';

class RemoveCartButton extends Component {
  constructor(props) {
    super(props);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  removeFromCart() {
    const { product, products, updateCart } = this.props;
    const reverse1 = products.reverse();
    const index = reverse1.findIndex((item) => item.id === product.id);
    reverse1.splice(index, 1);
    const reverse2 = reverse1.reverse();
    localStorage.setItem('cart', JSON.stringify(reverse2));
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

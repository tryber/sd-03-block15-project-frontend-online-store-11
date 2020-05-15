import React from 'react';
import { Link } from 'react-router-dom';
import './shoppingcartpage.css';


class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.state = { products: cart };
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentDidUpdate() {
    const { products } = this.state;
    localStorage.setItem('cart', JSON.stringify(products));
    if (products) {
      const totalItems = products.reduce((acc, cur) => {
        const quantity = parseInt((cur.quantity), 10);
        return acc + quantity;
      }, 0);
      localStorage.setItem('totalItems', totalItems);
    }
  }

  // changeQuantity(value, id) {
  //   const { products } = this.state;
  //   parseInt(id, 10);
  //   const teste = products.findIndex((product) => product.id === id);
  //   if (value === 'up') products[teste].quantity += 1;
  //   else if (products[teste].quantity > 1) products[teste].quantity -= 1;
  //   this.setState({ products });
  // }

  createQtdButton(quantity, id) {
    this.x = '-';
    return (
      <div className="flex_qtd_container">
        <button
          className="button_content"
          type="button"
          onClick={() => this.changeQuantity('down', id)}
        >
          {this.x}
        </button>
        <input type="input" className="input_qtd" value={quantity} />
        <button
          className="button_content"
          type="button"
          onClick={() => this.changeQuantity('up', id)}
        >
          +
        </button>
      </div>
    );
  }

  removeFromCart(event) {
    const { products } = this.state;
    const { id } = event.target;
    const item = products.findIndex((product) => product.id === id);
    products.splice(item, 1);
    this.setState({ products });
  }

  createRemoveButton(id) {
    this.x = 'x';
    return (
      <div>
        <button
          className="button_content"
          type="button"
          id={id}
          onClick={this.removeFromCart}
        >
          {this.x}
        </button>
      </div>
    );
  }

  createProductInfos(title, thumbnail, price, id, quantity) {
    return (
      <div key={id} className="flex_cart_container">
        <div className="align">
          {this.createRemoveButton(id)}
        </div>
        <div className="align, image_content">
          <img src={thumbnail} alt={`imagem de um ${title}`} />
        </div>
        <div className="title_content align" data-testid="shopping-cart-product-name">
          {title}
        </div>
        <div className="align quantity_button" data-testid="shopping-cart-product-quantity">
          {this.createQtdButton(quantity, id)}
        </div>
        <div className="align">
          {price}
        </div>
      </div>
    );
  }

  returnButton() {
    return (
      <div>
        <button
          label="return"
          type="button"
          onClick={() => this.onChangeRedirect('/')}
          className="return-button"
        />
      </div>
    );
  }

  checkoutButton() {
    this.value = 'Finalizar compra';
    return (
      <Link to="/checkout">
        <button className="checkout_button" type="button" data-testid="checkout-products">
          Finalizar Compra
        </button>
      </Link>
    );
  }

  totalPrice() {
    const { products } = this.state;
    let totalPrice = products.reduce((acc, cur) => {
      const { quantity, realPrice } = cur;
      return acc + (quantity * realPrice);
    }, 0);
    totalPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(totalPrice);
    localStorage.setItem('totalPrice', totalPrice);
    return (
      <div>
        <h2>
          {`Valor total da compra: 
          ${totalPrice}`}
        </h2>
      </div>
    );
  }

  render() {
    const { history } = this.props;
    const { products, isShouldRedirect, redirectPage } = this.state;
    if (isShouldRedirect) history.push(redirectPage);
    if (products && (products.length !== 0)) {
      return (
        <div className="div_content">
          {this.returnButton()}
          <div className="div_container">
            <h2>Carrinho de compras: </h2>
            {products.map(({ title, thumbnail, price, id, quantity }) =>
              this.createProductInfos(title, thumbnail, price, id, quantity))}
          </div>
          <div className="div_container">
            {this.totalPrice()}
          </div>
          {this.checkoutButton()}
        </div>
      );
    }
    return (
      <div>
        {this.returnButton()}
        <div className="empty_content" data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      </div>
    );
  }
}

export default ShoppingCart;

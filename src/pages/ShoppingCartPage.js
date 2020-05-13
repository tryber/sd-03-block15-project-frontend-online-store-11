import React from 'react';
import { Link } from 'react-router-dom';


class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const products = JSON.parse(localStorage.getItem('products'));
    this.state = {
      isShouldRedirect: false,
      redirectPage: '',
      productsArr: products,
    };
    this.removeFromCart = this.removeFromCart.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.onChangeRedirect = this.onChangeRedirect.bind(this);
  }

  componentDidUpdate() {
    const { productsArr } = this.state;
    localStorage.setItem('products', JSON.stringify(productsArr));
    if (productsArr) {
      const totalItems = productsArr.reduce((acc, cur) => {
        const quantity = parseInt((cur.quantity), 10);
        return acc + quantity;
      }, 0);
      localStorage.setItem('totalItems', totalItems);
    }
  }

  onChangeRedirect(path) {
    this.setState({
      isShouldRedirect: true,
      redirectPage: path,
    });
  }

  changeQuantity(value, id) {
    const { productsArr } = this.state;
    parseInt(id, 10);
    const teste = productsArr.findIndex((product) => product.id === id);
    if (value === 'up') productsArr[teste].quantity += 1;
    else if (productsArr[teste].quantity > 1) productsArr[teste].quantity -= 1;
    this.setState({ productsArr });
  }

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
    const { productsArr } = this.state;
    const { id } = event.target;
    const item = productsArr.findIndex((product) => product.id === id);
    productsArr.splice(item, 1);
    this.setState({ productsArr });
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
        <div className="title_content align">
          {title}
        </div>
        <div className="align quantity_button">
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
        <button className="checkout_button" type="button">
          {this.value}
        </button>
      </Link>
    );
  }

  totalPrice() {
    const { productsArr } = this.state;
    let totalPrice = productsArr.reduce((acc, cur) => {
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
    const { productsArr, isShouldRedirect, redirectPage } = this.state;
    if (isShouldRedirect) history.push(redirectPage);
    if (productsArr && (productsArr.length !== 0)) {
      return (
        <div className="div_content">
          {this.returnButton()}
          <div className="div_container">
            <div>
              <h2>Carrinho de compras: </h2>
            </div>
            {productsArr.map(({ title, thumbnail, price, id, quantity }) => this.createProductInfos(title, thumbnail, price, id, quantity))}
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

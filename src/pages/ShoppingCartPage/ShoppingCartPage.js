import React from 'react';
import { Link } from 'react-router-dom';
import AddCartButton from '../../components/AddCartButton';
import RemoveCartButton from '../../components/RemoveCartButton';
import ShoppingCartSize from '../../components/ShoppingCartSize/ShoppingCartSize';
import './shoppingcartpage.css';


class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const cart = (JSON.parse(localStorage.getItem('cart')) === null ? '' : JSON.parse(localStorage.getItem('cart')));
    this.state = { products: cart, cartSize: cart.length };
    this.updateCart = this.updateCart.bind(this);
  }

  updateCart() {
    const products = JSON.parse(localStorage.getItem('cart'));
    this.setState({ products, cartSize: products.length });
  }

  quantityButtons(product, id) {
    const { products } = this.state;
    const quantity = products.filter((item) => item.id === id).length;
    return (
      <div className="flex_qtd_container">
        <RemoveCartButton product={product} products={products} datatestid="product-decrease-quantity" updateCart={this.updateCart} buttonText="-" />
        <p className="input_qtd" data-testid="shopping-cart-product-quantity">{quantity}</p>
        <AddCartButton product={product} datatestid="product-increase-quantity" updateCart={this.updateCart} buttonText="+" />
      </div>
    );
  }

  removeAllItems(id) {
    const { products } = this.state;
    const removedItem = products.filter((product) => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(removedItem));
    return this.updateCart();
  }

  createProductInfos(title, thumbnail, price, id, product) {
    return (
      <div key={id} className="flex_cart_container">
        <div className="align">
          <button type="button" onClick={() => this.removeAllItems(id)}>X</button>
        </div>
        <div className="align, image_content">
          <img src={thumbnail} alt={`imagem de um ${title}`} />
        </div>
        <div className="title_content align" data-testid="shopping-cart-product-name">
          {title}
        </div>
        <div className="align quantity_button">
          {this.quantityButtons(product, id)}
        </div>
        <div className="align">
          {`R$${price}`}
        </div>
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

  render() {
    const { products, cartSize } = this.state;
    if (products && (products.length !== 0)) {
      const filteredProducts = products.reduce((acc, current) => {
        const unique = acc.find((item) => item.id === current.id);
        if (!unique) {
          return [...acc, current];
        }
        return acc;
      }, []);
      return (
        <div className="div_content">
          {/* {this.returnButton()} */}
          <ShoppingCartSize cartSize={cartSize} />
          <div className="div_container">
            <h2>Carrinho de compras: </h2>
            {filteredProducts.map((product) => this.createProductInfos(product.title, product.thumbnail, product.price, product.id, product))}
          </div>
          <div className="div_container">
            {/* {this.totalPrice()} */}
          </div>
          {this.checkoutButton()}
        </div>
      );
    }
    return (
      <div>
        {/* {this.returnButton()} */}
        <div className="empty_content" data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      </div>
    );
  }
}

export default ShoppingCart;

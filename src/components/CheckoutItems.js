import React from 'react';

class CheckoutItems extends React.Component {
  constructor(props) {
    super(props);
    const cart = (JSON.parse(localStorage.getItem('cart')) === null ? '' : JSON.parse(localStorage.getItem('cart')));
    this.state = { products: cart };
  }
  quantityButtons(product, id) {
    const { products } = this.state;
    const quantity = products.filter((item) => item.id === id).length;
    return (
      <p className="input_qtd" data-testid="shopping-cart-product-quantity">{quantity}</p>
    );
  }

  createProductInfos(title, thumbnail, price, id, product) {
    return (
      <div key={id} className="flex_cart_container">
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

  totalPrice() {
    const { products } = this.state;
    let totalPrice = products.reduce((acc, cur) => {
      const { price } = cur;
      return acc + price;
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

  totalPrice() {
    const { products } = this.state;
    let totalPrices = products.reduce((acc, cur) => {
      const { price } = cur;
      return acc + price;
    }, 0);
    totalPrices = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(totalPrices);
    localStorage.setItem('totalPrice', totalPrices);
    return (
      <div>
        <h2>
          {`Valor total da compra: 
          ${totalPrices}`}
        </h2>
      </div>
    );
  }

  filteredProducts() {
    const { products } = this.state;
    const filteredProducts = products.reduce((acc, current) => {
      const unique = acc.find((item) => item.id === current.id);
      if (!unique) {
        return [...acc, current];
      }
      return acc;
    }, []);
    return (
      <div className="div_content">
        <div className="div_container">
          <p>Revise seus produtos</p>
          {filteredProducts.map((product) => this.createProductInfos(
            product.title,
            product.thumbnail,
            product.price,
            product.id,
            product))}
        </div>
        <div className="div_container">
        {this.totalPrice()}
        </div>
      </div>
    );
  }
 
  render() {
    const { products } = this.state;
    if (products && (products.length !== 0)) return this.filteredProducts();
    return (
      <div>
        <div className="empty_content" data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      </div>
    );
  }
}

export default CheckoutItems;

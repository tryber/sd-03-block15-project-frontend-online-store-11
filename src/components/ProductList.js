import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    const { productsList } = this.props;

    if (productsList.length > 0) {
      return (
        <div className="product-list">
          {productsList.map((card) => <p data-testid="product">{card.title}</p>)}
        </div>
      );
    }

    return (
      <div data-testid="home-initial-message" className="product-list">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </div>
    );
  }
}

export default ProductList;

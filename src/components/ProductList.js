import React, { Component } from 'react';
import '../pages/PLP.css';

class ProductList extends Component {
  render() {
    const { list } = this.props;

    if (list.length > 0) {
      return (
        <div className="product-list">
          {list.map((card) => <p data-testid="product">{card.title}</p>)}
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

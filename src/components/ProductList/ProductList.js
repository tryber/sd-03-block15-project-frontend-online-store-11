import React, { Component } from 'react';
import './productlist.css';
import ProductCard from '../ProductCard/ProductCard';

class ProductList extends Component {
  render() {
    const { productsList } = this.props;
    if (productsList.length > 0) {
      return (
        <div className="product-list">
          {list.map((card) => 
          <ProductCard 
            data-testid="product" title={card.title} src={card.thumbnail} price={card.price}
          />)}
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

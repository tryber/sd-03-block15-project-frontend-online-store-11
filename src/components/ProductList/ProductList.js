import React, { Component } from 'react';
import './productlist.css';
import ProductCard from '../ProductCard/ProductCard';

class ProductList extends Component {
  constructor(props){
    super(props);

    this.saveProduct = this.saveProduct.bind(this)
  }

  saveProduct(productId) {
    const { productsList } = this.props;
    const product = productsList.find(product => productId === product.id);
    localStorage.setItem("productDetails", JSON.stringify(product));
  }

  render() {
    const { productsList } = this.props;
    if (productsList.length > 0) {
      return (
        <div className="product-list">
          {productsList.map((card) => 
          <ProductCard 
            title={card.title} src={card.thumbnail} price={card.price} 
            id={card.id} key={card.id} details={this.saveProduct}
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

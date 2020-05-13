import React, { Component } from 'react';
import * as API from '../../services/api';
import ProductList from '../../components/ProductList';
import './productlistpage.css';

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      query: '',
      categoryID: '',
      productsList: [],
    };
    this.handleRadio = this.handleRadio.bind(this);
    this.handleQueryButton = this.handleQueryButton.bind(this);
  }

  componentDidMount() {
    API.getCategories().then((categories) => this.setState({ categories }));
  }

  categoryList(id, name) {
    return (
      <div key={id}>
        <input
          type="radio"
          id={id}
          value={id}
          onClick={(e) => this.handleRadio(e)}
          name="category"
          key={id}
        />
        <label data-testid="category" htmlFor={id}>{name}</label>
      </div>
    );
  }

  handleRadio(event) {
    const { query } = this.state;
    const categoryID = event.target.value;
    this.setState({ categoryID });
    if (query) {
      API.getProductsFromCategoryAndQuery(categoryID, query)
        .then(({ results }) => this.setState({ productsList: results }));
    } else {
      API.getCategory(categoryID).then(({ results }) => this.setState({ productsList: results }));
    }
  }

  handleQueryButton() {
    const { productsList, query, categoryID } = this.state;
    if (productsList.length > 0) {
      API.getProductsFromCategoryAndQuery(categoryID, query).then(({ results }) => this.setState({ productsList: results }));
    } else {
      API.getQuery(query).then(({ results }) => this.setState({ productsList: results }));
    }
  }


  render() {
    const { categories, query, productsList } = this.state;
    return (
      <div className="container">
        <div className="header">
          <input
            type="text"
            data-testid="query-input"
            value={query}
            onChange={(e) => this.setState({ query: e.target.value })}
          />
          <button type="button" data-testid="query-button" onClick={this.handleQueryButton}>
            BUSCA
          </button>
        </div>
        <div className="inner-container">
          <div className="categories-container">
            {categories.map(({ id, name }) => this.categoryList(id, name))}
          </div>
          <ProductList productsList={productsList} />
        </div>
      </div>
    );
  }
}

export default ProductListPage;

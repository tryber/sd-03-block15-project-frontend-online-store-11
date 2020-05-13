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
      list: [],
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
    this.setState({ categoryID: event.target.value });
    if (query) {
      API.getQueryNCategory(event.target.value, query)
        .then((r) => this.setState({ list: r.results }));
    } else {
      API.getCategory(event.target.value).then((r) => this.setState({ list: r.results }));
    }
  }

  handleQueryButton() {
    const { list, query, categoryID } = this.state;
    if (list.length > 0) {
      API.getQueryNCategory(categoryID, query).then((r) => this.setState({ list: r.results }));
    } else {
      API.getQuery(query).then((r) => this.setState({ list: r.results }));
    }
  }


  render() {
    const { categories, query } = this.state;
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
            {categories.map((category) => this.categoryList(category.id, category.name))}
          </div>
          <ProductList list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default ProductListPage;

import React, { Component } from 'react';
import * as API from '../services/api';
import { Link } from 'react-router-dom';
import './PLP.css';
import ProductList from '../components/ProductList';

class ProductListPage extends Component {
  constructor(props){
    super (props);

    this.state = {
      categories: [],
      queryName: '',
      list: [],
    }
  }

  componentDidMount() {
    API.getCategories().then((categories) => this.setState({ categories }));
  }

  categoryList(id, name) {
    return(
      <div key={id}>
        <input 
          type="radio" id={id} value={id} 
          onClick={(e) => {
            API.getCategory(e.target.value).then((resp) => this.setState({ list: resp.results }))
          }} 
          name="category" key={id} 
        />
        <label htmlFor={id}>{name}</label>
      </div>
    )
  }


  render () {
    const { categories, queryName, selectedCategory } = this.state
    return(
      <div className="container">
        <div className="header">
          <input type="text" value={queryName} onChange={(e) => this.setState({ queryName: e.target.value})} />
          <button type="button" ><Link to='/shoppingcart'>CART</Link></button>
        </div>
        <div className="inner-container">
          <div className="categories-container">
            {categories.map((category) => this.categoryList(category.id, category.name))}
            <div>
              <input type="radio" id="clear" value="" onClick={() => this.setState({ list: [] })} name="category" />
              <label htmlFor="clear">Limpar</label>
            </div>
          </div>
          <ProductList category={selectedCategory} list={this.state.list} />
        </div>
      </div>
    )
  }

}

export default ProductListPage;
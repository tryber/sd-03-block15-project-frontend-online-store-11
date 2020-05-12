import React, { Component } from 'react';
import * as API from '../services/api';

class ProductListPage extends Component {
  constructor(props){
    super (props);

    this.state = {
      categories: [],
    }
  }


  render () {
    return(
      <div className="container">
        <input type="text" />
        <div className="product-list">Digite algum termo de pesquisa ou escolha uma categoria</div>
      </div>
    )
  }

}

export default ProductListPage;
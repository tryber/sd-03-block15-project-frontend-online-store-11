import React, { Component } from 'react';
import '../pages/PLP.css';

class ProductList extends Component {
  constructor(props){
    super (props);

  }

  render(){
    const { list } = this.props

    if(list.length>0){
      return(
        <div className="product-list">
          {list.map((card) => <p>{card.title}</p>)}
        </div>
      )
    }
  
    return <div className="product-list">Digite algum termo de pesquisa ou escolha uma categoria</div>
    
  }
}

export default ProductList;
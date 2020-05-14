import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddCartButton from '../components/AddCartButton';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    }
  }

  componentDidMount() {
    const product = JSON.parse(localStorage.getItem("productDetails"));
    this.setState({ product });
  }
  render() {
    const { product } = this.state;
    if(Object.keys(product).length > 0){
      return (
        <div>
          <h1 data-testid="product-detail-name">{product.title}</h1>
          <img src={product.thumbnail} alt="thumbnail" />
          <h2>{product.price}</h2>
          {product.attributes.map(attribute =>
          <p key={attribute.id}>{`${attribute.name}: ${attribute.value_name}`}</p>)}
          <Link to="/">Voltar</Link>
          <AddCartButton product={product}/>
        </div>
      );
    }
    return <div>Teste</div>;
  }
}

export default ProductDetails;
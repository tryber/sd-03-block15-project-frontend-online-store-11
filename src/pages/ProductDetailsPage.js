import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddCartButton from '../components/AddCartButton';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const product = JSON.parse(localStorage.getItem('productDetails'));
    const { title, thumbnail, price, attributes, available_quantity } = product;
    this.state = {
      product: {
        title,
        thumbnail,
        price,
        attributes,
        available_quantity,
      },
    };
  }


  render() {
    const { product } = this.state;
    if (product.title !== null) {
      return (
        <div>
          <h1 data-testid="product-detail-name">{product.title}</h1>
          <img src={product.thumbnail} alt="thumbnail" />
          <h2>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            }).format(product.price)}
          </h2>
          {product.attributes.map((attribute) => <p key={attribute.id}>{`${attribute.name}: ${attribute.value_name}`}</p>)}
          <Link to="/">Voltar</Link>
          <AddCartButton product={product} />
        </div>
      );
    }
    return <div>Teste</div>;
  }
}

export default ProductDetails;

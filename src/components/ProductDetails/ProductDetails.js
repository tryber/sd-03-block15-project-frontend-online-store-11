import React, { Component } from 'react';
import ReturnButton from '../ReturnButton';
import AddCartButton from '../AddCartButton';
import '../../pages/ProductDetailsPage/productdetailspage.css';

class ProductDetails extends Component {
  render() {
    const { product, updateCart } = this.props;
    return (
      <div className="details">
        <div className="main-details">
          <h2 data-testid="product-detail-name">{product.title}</h2>
          <img src={product.thumbnail} alt="thumbnail" />
          <h3>{`R$${product.price}`}</h3>
        </div>
        <div className="attributes">
          {product.attributes.map((attribute) => <p key={attribute.id}>{`${attribute.name}: ${attribute.value_name}`}</p>)}
        </div>
        <div className="detail-buttons">
          <ReturnButton />
          <AddCartButton product={product} updateCart={updateCart} datatestid="product-detail-add-to-cart" />
        </div>
      </div>
    );
  }
}

export default ProductDetails;

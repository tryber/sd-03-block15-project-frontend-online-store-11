import React, { Component } from 'react';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import './productdetailspage.css';

class ProductDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      review: '',
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    this.setState({ product: JSON.parse(localStorage.getItem('productDetails')) });
  }

  render() {
    const { product, review } = this.state;
    if (Object.keys(product).length > 0) {
      return (
        <div className="details-container">
          <ProductDetails product={product} />
          <div className="review">
            <label htmlFor="user-review">Escreva sua avaliação do produto:</label><br />
            <textarea
              data-testid="product-detail-evaluation" id="user-review"
              value={review} onChange={(e) => this.setState({ review: e.target.value })}
            />
            <button type="button" onClick={() => this.setState({ review: '' })}>Enviar</button>
          </div>
        </div>
      );
    }
    return <div>Teste</div>;
  }
}

export default ProductDetailsPage;

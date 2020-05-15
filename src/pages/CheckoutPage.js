import React from 'react';
import CheckoutItems from '../components/CheckoutItems';
import CheckoutForm from '../components/CheckoutForm';
import ReturnButtton from '../components/ReturnButton';

class Checkout extends React.Component {

  render() {
    return (
      <div>
        <ReturnButtton />
        <CheckoutItems />
        <CheckoutForm />
      </div>
    );
  }
}

export default Checkout;

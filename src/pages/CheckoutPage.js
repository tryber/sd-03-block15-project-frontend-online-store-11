import React from 'react';
import CheckoutButton from '../components/CheckoutButton';
import CheckoutItems from '../components/CheckoutItems';
import CheckoutForm from '../components/CheckoutForm';
import CheckoutPay from '../components/CheckoutPay';
import ReturnButtton from '../components/ReturnButton';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <div>
        <ReturnButtton />
        <CheckoutItems />
        <CheckoutForm />
        <CheckoutPay />
        <CheckoutButton />
      </div>
    );
  }
}

export default Checkout;

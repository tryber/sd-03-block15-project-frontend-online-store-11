import React from 'react';

class CheckoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
  }

  validate() {
    console.log(this.state);
  }

  render() {
    return (
      <button type="button" onClick={this.validate}>Comprar</button>
    );
  }
}

export default CheckoutButton;

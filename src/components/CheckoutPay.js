import React from 'react';

class CheckoutPay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ checked: event.target.value });
  }

  render() {
    return (
      <div>
        <p>Método de Pagamento</p>
        <label htmlFor="Boleto"> Boleto
          <input
            type="radio" value="Boleto" checked={this.state.checked === 'Boleto'}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="Visa"> Cartão de Crédito
        <input
          type="radio" value="Visa" checked={this.state.checked === 'Visa'}
          onChange={this.handleChange}
        />Visa
        <input
          type="radio" value="Mastercard" checked={this.state.checked === 'Mastercard'}
          onChange={this.handleChange}
        />Mastercard
        <input
          type="radio" value="Elo" checked={this.state.checked === 'Elo'}
          onChange={this.handleChange}
        />Elo
        </label>
      </div>
    );
  }
}

export default CheckoutPay;

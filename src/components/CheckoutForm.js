import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  static handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text" value={this.state.value}
          onChange={this.handleChange} name="fullName" placeholder="Nome Completo" />
        <input
          type="text" value={this.state.value}
          onChange={this.handleChange} name="CPF" placeholder="CPF" />
        <input
          type="email" value={this.state.value}
          onChange={this.handleChange} name="email" placeholder="email" />
        <input
          type="text" value={this.state.value}
          onChange={this.handleChange} name="Phone" placeholder="Telefone" />
        <input
          type="text" value={this.state.value}
          onChange={this.handleChange} name="fCEP" placeholder="CEP" />
        <input
          type="text" value={this.state.value}
          onChange={this.handleChange} name="Address" placeholder="Endereço" />
        <input
          type="text" value={this.state.value}
          onChange={this.handleChange} name="Complemento" placeholder="Complemento" />
        <input
          type="text" value={this.state.value}
          onChange={this.handleChange} name="Numero" placeholder="Numero" />
      </form>
    );
  }
}

export default CheckoutForm;

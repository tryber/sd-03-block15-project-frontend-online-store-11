import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      CPF: '',
      email: '',
      phone: '',
      CEP: '',
      Address: '',
      Complemento: '',
      Number: '',
      Cidade: '',
      Estado: 'Estado',
      checked: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.PayMethod = this.PayMethod.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  }

  handleRadio(event) {
    this.setState({ checked: event.target.value });
  }

  handleSubmit(event) {
    console.log(this);
    event.preventDefault();
  }

  handleDropdown(event) {
    const value = event.target.value;
    this.setState({ Estado: value });
  }

  handleClick(event) {
    if (this.state.Estado === 'Estado' || this.state.checked === false) event.preventDefault();
  }

  textblock1() {
    return (
      <div>
        <input
          type="text" value={this.state.fullName} onChange={this.handleChange}
          name="fullName" placeholder="Nome Completo" required="required"
          data-testid="checkout-fullname"
        />
        <input
          type="text" value={this.state.CPF} onChange={this.handleChange}
          name="CPF" placeholder="CPF" required="required"
          data-testid="checkout-cpf"
        />
        <input
          type="email" value={this.state.email} required="required"
          onChange={this.handleChange} name="email" placeholder="email"
          data-testid="checkout-email"
        />
        <input
          type="text" value={this.state.phone} required="required"
          onChange={this.handleChange} name="phone" placeholder="Telefone"
          data-testid="checkout-phone"
        />
      </div>
    );
  }

  textblock2() {
    return (
      <div>
        <input
          type="text" value={this.state.CEP} required="required"
          onChange={this.handleChange} name="CEP" placeholder="CEP"
          data-testid="checkout-cep"
        />
        <input
          type="text" value={this.state.Address} required="required"
          onChange={this.handleChange} name="Address" placeholder="Endereço"
          data-testid="checkout-address"
        />
      </div>
    );
  }

  textblock3() {
    const Estados = ['Estado', 'AC', 'AP', 'AL', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT',
      'PA', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    return (
      <div>
        <input
          type="text" value={this.state.Complemento} required="required"
          onChange={this.handleChange} name="Complemento" placeholder="Complemento"
        />
        <input
          type="text" value={this.state.Number} required="required"
          onChange={this.handleChange} name="Number" placeholder="Numero"
        />
        <input
          type="text" value={this.state.Cidade} required="required"
          onChange={this.handleChange} name="Cidade" placeholder="Cidade"
        />
        <select required="required" onChange={this.handleDropdown}>
          {Estados.map((ele) =>
            <option value={ele}>{ele}</option>)}
        </select>
      </div>
    );
  }

  PayMethod() {
    return (
      <div>
        <p>Método de Pagamento</p>
        <label htmlFor="Boleto"> Boleto
          <input
            type="radio" value="Boleto" checked={this.state.checked === 'Boleto'}
            onChange={this.handleRadio}
          />
        </label>
        <label htmlFor="Visa"> Cartão de Crédito
        <input
          type="radio" value="Visa" checked={this.state.checked === 'Visa'}
          onChange={this.handleRadio}
        />Visa
        <input
          type="radio" value="Mastercard" checked={this.state.checked === 'Mastercard'}
          onChange={this.handleRadio}
        />Mastercard
        <input
          type="radio" value="Elo" checked={this.state.checked === 'Elo'}
          onChange={this.handleRadio}
        />Elo
        </label>
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Informações do comprador</p>
        {this.textblock1()}
        {this.textblock2()}
        {this.textblock3()}
        {this.PayMethod()}
        <input type="submit" value="Comprar" onClick={this.handleClick} />
      </form>
    );
  }
}

export default CheckoutForm;

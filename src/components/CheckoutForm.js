import React from 'react';

class CheckoutForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  textblock1() {
    return (
      <div>
        <input
          type="text" value={this.state.value} onChange={this.handleChange}
          name="fullName" placeholder="Nome Completo"
        />
        <input
          type="text" value={this.state.value} onChange={this.handleChange}
          name="CPF" placeholder="CPF"
        />
        <input
          type="email" value={this.state.value}
          onChange={this.handleChange} name="email" placeholder="email"
        />
        <input
          type="text" value={this.state.value}
          onChange={this.handleChange} name="Phone" placeholder="Telefone"
        />
      </div>
    );
  }

  textblock2() {
    return (
      <div>
        <input
          type="text" value={this.state.value}
          onChange={this.handleChange} name="CEP" placeholder="CEP"
        />
        <input
          type="text" value={this.state.value}
          onChange={this.handleChange} name="Address" placeholder="Endereço"
        />
      </div>
    );
  }

  textblock3() {
    const Estados = ['AC', 'AP', 'AL', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT',
      'PA', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    return (
      <div>
        <input
          type="text" value={this.state.value}
          onChange={this.handleChange} name="Complemento" placeholder="Complemento"
        />
        <input
          type="text" value={this.state.value}
          onChange={this.handleChange} name="Numero" placeholder="Numero"
        />
        <input
          type="text" value={this.state.value}
          onChange={this.handleChange} name="Cidade" placeholder="Cidade"
        />
        <select>
          {Estados.map((ele) => <option value={ele} placeholder="Estado">{ele}</option>)}
        </select>
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
      </form>
    );
  }
}

export default CheckoutForm;

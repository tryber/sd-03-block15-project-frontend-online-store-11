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
      Number:'',
      Cidade:'',
      Estado:'',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({...this.state,
      [event.target.name]: value
    });
  }

  textblock1() {
    return (
      <div>
        <input
          type="text" value={this.state.fullName} onChange={this.handleChange}
          name="fullName" placeholder="Nome Completo"
        />
        <input
          type="text" value={this.state.CPF} onChange={this.handleChange}
          name="CPF" placeholder="CPF"
        />
        <input
          type="email" value={this.state.email}
          onChange={this.handleChange} name="email" placeholder="email"
        />
        <input
          type="text" value={this.state.phone}
          onChange={this.handleChange} name="Phone" placeholder="Telefone"
        />
      </div>
    );
  }

  textblock2() {
    return (
      <div>
        <input
          type="text" value={this.state.CEP}
          onChange={this.handleChange} name="CEP" placeholder="CEP"
        />
        <input
          type="text" value={this.state.Address}
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
          type="text" value={this.state.Complemento}
          onChange={this.handleChange} name="Complemento" placeholder="Complemento"
        />
        <input
          type="text" value={this.state.Number}
          onChange={this.handleChange} name="Numero" placeholder="Numero"
        />
        <input
          type="text" value={this.state.Cidade}
          onChange={this.handleChange} name="Cidade" placeholder="Cidade"
        />
        <select value={this.state.Estado}>
          {Estados.map((ele) => <option value={ele} placeholder="Estado">{ele}</option>)}
        </select>
      </div>
    );
  }
  render() {
    return (
      <form>
        <p>Informações do comprador</p>
        {this.textblock1()}
        {this.textblock2()}
        {this.textblock3()}
      </form>
    );
  }
}

export default CheckoutForm;

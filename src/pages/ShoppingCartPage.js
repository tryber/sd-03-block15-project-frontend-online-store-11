import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './ShoppingCart.css';
import emptyCart from '../imgs/carrinho-vazio.jpg';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const teste = JSON.parse(localStorage.getItem('products'));    
    this.state = {
      isShouldRedirect: false,
      redirectPage: '',
      productsArr: teste,
    };
    this.removeFromCart = this.removeFromCart.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.onChangeRedirect = this.onChangeRedirect.bind(this);
  }

  onChangeRedirect(string) {
    this.setState({
      isShouldRedirect: true,
      redirectPage: string,
    });
  }
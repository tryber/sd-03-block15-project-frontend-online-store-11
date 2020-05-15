import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './pages/ProductListPage/ProductListPage';
import ProductDetails from './pages/ProductDetailsPage/ProductDetailsPage';
import ShoppingCart from './pages/ShoppingCartPage/ShoppingCartPage';
import Checkout from './pages/CheckoutPage';
import NotFound from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/shoppingcart" component={ShoppingCart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;

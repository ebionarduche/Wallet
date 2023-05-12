import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

class Content extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </main>
    );
  }
}

export default Content;

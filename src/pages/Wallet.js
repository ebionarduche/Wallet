import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div className="login-container">
          <Header />
        </div>
        <div className="container">
          <WalletForm />
          <Table />
        </div>
      </div>
    );
  }
}

export default Wallet;

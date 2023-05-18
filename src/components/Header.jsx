import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';
import logo from '../images/web-wallet.png';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;

    const total = expenses
      .reduce((
        acc,
        { value, currency, exchangeRates },
      ) => acc + (Number(value) * exchangeRates[currency].ask), 0)
      .toFixed(2);

    return (
      <div className="header-div">
        <img className="web-wallet-img" src={ logo } alt="wallet" />
        <div className="header-currency">
          <h2 data-testid="header-currency-field">Seu Gasto Total é de BRL: </h2>
          <h2 data-testid="total-field">{ total }</h2>
        </div>
        <h3 data-testid="email-field">{ email }</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  editor: state.wallet.editor,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);

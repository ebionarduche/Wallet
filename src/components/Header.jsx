import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
      <div>
        <h1 data-testid="email-field">{ email }</h1>

        <span data-testid="header-currency-field">BRL:</span>
        <span data-testid="total-field">{total}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);

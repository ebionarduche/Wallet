import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense, requestApi } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    payment: 'Dinheiro',
    category: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestApi());
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { currencies, dispatch } = this.props;
    const { state } = this.state;
    return (
      <form>
        <label htmlFor="">
          Valor:
          <input
            type="number"
            name="value"
            id=""
            data-testid="value-input"
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="">
          Descrição:
          <input
            type="text"
            name="description"
            id=""
            data-testid="description-input"
            onChange={ this.onInputChange }
          />
        </label>

        <label htmlFor="">
          Moeda
          <select
            name="currency"
            id=""
            data-testid="currency-input"
            onChange={ this.onInputChange }
          >
            {
              currencies.map((moeda, index) => (
                <option key={ index } value={ moeda }>{ moeda }</option>
              ))
            }
          </select>
        </label>

        <label htmlFor="">
          Forma de Pagamento:
          <select
            name="payment"
            id=""
            data-testid="method-input"
            onChange={ this.onInputChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="">
          Categoria:
          <select
            name="category"
            id=""
            data-testid="tag-input"
            onChange={ this.onInputChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => dispatch(addExpense(this.state)) }
        >

          Adicionar despesa
        </button>

      </form>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func,
  currencies: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);

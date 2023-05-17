import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, editExpenseInit } from '../redux/actions';
import './Table.css';

class Table extends Component {
  render() {
    const { expenses, dispatch } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th className="table">Descrição</th>
            <th className="table">Tag</th>
            <th className="table">Método de pagamento</th>
            <th className="table">Valor</th>
            <th className="table">Moeda</th>
            <th className="table">Câmbio utilizado</th>
            <th className="table">Moeda de conversão</th>
            <th className="table">Valor convertido</th>
            <th className="table">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map(({
              description,
              id,
              tag,
              method,
              value,
              exchangeRates,
              currency,
            }) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{Number(value).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>Real</td>
                <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
                <td>
                  <button
                    type="button"
                    className="edit-btn"
                    data-testid="edit-btn"
                    onClick={ () => dispatch(editExpenseInit(id)) }
                  >
                    Editar
                  </button>

                  <button
                    type="button"
                    className="remove-btn"
                    data-testid="delete-btn"
                    onClick={ () => dispatch(removeExpense(id)) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  editor: state.wallet.editor,
});

Table.propTypes = {
  expenses: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Table);

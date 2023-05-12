import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="">
          Valor:
          <input
            type="number"
            name=""
            id=""
            data-testid="value-input"
          />
        </label>

        <label htmlFor="">
          Descrição:
          <input
            type="text"
            name=""
            id=""
            data-testid="description-input"
          />
        </label>

        <label htmlFor="">
          Moeda
          <select
            name=""
            id=""
            data-testid="currency-input"
          >
            <option value="">USD</option>
            <option value="">BRL</option>
          </select>
        </label>

        <label htmlFor="">
          Forma de Pagamento:
          <select
            name=""
            id=""
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="">
          Categoria:
          <select
            name=""
            id=""
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

      </form>
    );
  }
}

export default WalletForm;

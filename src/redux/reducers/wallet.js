import {
  REQUEST_SUCCESS,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE_INIT,
  EDIT_EXPENSE_SUBMIT,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_SUCCESS:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ADD_EXPENSE: {
    const newExpense = { id: state.expenses.length };
    const combinedExpense = { ...action.expenses, ...newExpense };
    const combinedData = { ...combinedExpense, exchangeRates: action.data };
    return {
      ...state,
      expenses: [...state.expenses, combinedData],
    };
  }
  case REMOVE_EXPENSE: {
    const newExpenses = state.expenses.filter(({ id }) => id !== action.id);
    return {
      ...state,
      expenses: newExpenses,
    };
  }
  case EDIT_EXPENSE_INIT: {
    return {
      ...state,
      editor: true,
      idToEdit: action.id,
    };
  }
  case EDIT_EXPENSE_SUBMIT:
    return {
      ...state,
      editor: false,
      idToEdit: 0,
      expenses: action.editExpense,
    };
  default:
    return state;
  }
};

export default wallet;

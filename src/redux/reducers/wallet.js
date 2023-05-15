import { REQUEST_SUCCESS, ADD_EXPENSE } from '../actions';

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
    console.log(state);
    const combinedExpense = { ...action.expenses, ...newExpense };
    return {
      ...state,
      expenses: [...state.expenses, combinedExpense],

    };
  }
  default:
    return state;
  }
};

export default wallet;

// Coloque aqui suas actions
// export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE_INIT = 'EDIT_EXPENSE_INIT';
export const EDIT_EXPENSE_SUBMIT = 'EDIT_EXPENSE_SUBMIT';

export const requestSuccess = (currencies) => ({
  type: REQUEST_SUCCESS,
  currencies,
});

export const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  error,
});

export const requestApi = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const allCurrenciesArray = Object.keys(data);
    allCurrenciesArray.splice(1, 1);
    dispatch(requestSuccess(allCurrenciesArray));
  } catch (error) {
    dispatch(requestFailed(error));
  }
};

export const submitLogin = (email) => ({
  type: SUBMIT_LOGIN,
  email,
});

export const addExpense = (expenses, data) => ({
  type: ADD_EXPENSE,
  expenses,
  data,
});

export const requestAndAddExpense = (expenses) => async (dispatch) => {
  dispatch(requestApi);
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch(addExpense(expenses, data));
};

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  id,
});

export const editExpenseInit = (id) => ({
  type: EDIT_EXPENSE_INIT,
  id,
});

export const editExpenseSubmit = (editExpense) => ({
  type: EDIT_EXPENSE_SUBMIT,
  editExpense,
});

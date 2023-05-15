// Coloque aqui suas actions
// export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const submitLogin = (email) => ({
  type: SUBMIT_LOGIN,
  email,
});

export const addExpense = (expenses, data) => ({
  type: ADD_EXPENSE,
  expenses,
  data,
});

export const requestSuccess = (currencies) => ({
  type: REQUEST_SUCCESS,
  currencies,
});

export const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  error,
});

export const requestAndAddExpense = (expenses) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch(addExpense(expenses, data));
};

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

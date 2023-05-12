// Coloque aqui suas actions
// export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
import { CURRENCIES_FETCH } from '../reducers/wallet';

export const submitLogin = (email) => ({
  type: 'SUBMIT_LOGIN',
  email,
});

export const currenciesFetch = (payload) => ({
  type: CURRENCIES_FETCH,
  ...payload,
});

export const requestStarted = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => dispatch(currenciesFetch(data)));
};

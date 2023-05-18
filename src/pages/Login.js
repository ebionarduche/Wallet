import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitLogin } from '../redux/actions/index';

class Login extends Component {
  state = {
    email: '',
    password: '',
    buttonDisable: true,
  };

  InputValidation = () => {
    const { password, email } = this.state;
    const re = /\S+@\S+\.\S+/;
    const six = 6;
    const validPass = password.length >= six;
    const validEmail = re.test(email);
    const validation = validPass && validEmail;

    if (validation) {
      this.setState({
        buttonDisable: false,
      });
    } else {
      this.setState({
        buttonDisable: true,
      });
    }
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.InputValidation);
  };

  render() {
    const { buttonDisable, email } = this.state;
    const { history, dispatch } = this.props;
    return (
      <div className="login-form">
        <form>
          <label htmlFor="">
            Email:
            <input
              type="email"
              name="email"
              id=""
              onChange={ this.onInputChange }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="">
            Senha:
            <input
              type="password"
              name="password"
              id=""
              onChange={ this.onInputChange }
              data-testid="password-input"
            />
          </label>
          <button
            type="submit"
            disabled={ buttonDisable }
            onClick={ (event) => {
              event.preventDefault();
              history.push('/carteira');
              dispatch(submitLogin(email));
            } }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    dispatch: PropTypes.func,
  }),
}.isRequired;

export default connect()(Login);

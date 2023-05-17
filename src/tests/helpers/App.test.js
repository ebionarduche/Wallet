import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './renderWith';
import App from '../../App';

const emailShape = 'email-input';
const passwordShape = 'password-input';
describe('1 - Login Page', () => {
  it('Verifica se esta renderizado na tela o input de email e senha e um botão de entrar', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(emailShape);
    const inputPassaword = screen.getByTestId(passwordShape);
    const btnSubmit = screen.getByRole('button');
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassaword).toBeInTheDocument();
    expect(btnSubmit).toBeInTheDocument();
  });
  it('Verifica se é possivel digitar nos inputs e se somos redirecionados para /carteira ', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(emailShape);
    const inputPassaword = screen.getByTestId(passwordShape);
    const btnSubmit = screen.getByRole('button');
    userEvent.type(inputEmail, 'alguem@alguem.com');
    userEvent.type(inputPassaword, '123456');
    userEvent.click(btnSubmit);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/carteira');
    const currencie = screen.getByText(/brl:/i);
    expect(currencie).toBeInTheDocument();
  });
});

describe('2 - Header ', () => {
  it('Verifica se os componentes dos Header são Renderizados', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const emailField = screen.getByTestId('email-field');
    const currencieField = screen.getByTestId('header-currency-field');

    expect(emailField).toBeInTheDocument();
    expect(currencieField).toBeInTheDocument();
  });
  it('Verifica se exibe corretamente o email digitado', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassaword = screen.getByTestId('password-input');
    const btnSubmit = screen.getByRole('button');

    userEvent.type(inputEmail, 'test@test.com');
    userEvent.type(inputPassaword, '123456');
    userEvent.click(btnSubmit);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/carteira');
    const emailField = screen.getByTestId('email-field');
    expect(emailField).toBeInTheDocument();
    expect(emailField).toHaveTextContent('test@test.com');
  });
});

describe('3 - WalletForm ', () => {
  it('Verifica se os inputs do formulário estão renderizados', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const inputValue = screen.getByTestId('value-input');
    const inputDescription = screen.getByTestId('description-input');
    const inputCurrency = screen.getByTestId('currency-input');
    const inputMethod = screen.getByTestId('method-input');
    const inputTag = screen.getByTestId('tag-input');

    expect(inputValue).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(inputCurrency).toBeInTheDocument();
    expect(inputMethod).toBeInTheDocument();
    expect(inputTag).toBeInTheDocument();
  });
  it('Verifica se é possivel digitar nos input', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const inputValue = screen.getByTestId('value-input');
    const inputDescription = screen.getByTestId('description-input');
    const inputCurrency = screen.getByTestId('currency-input');
    const inputMethod = screen.getByTestId('method-input');
    const inputTag = screen.getByTestId('tag-input');
    const btnSubmit = screen.getByRole('button', { name: /adicionar despesa/i });

    userEvent.type(inputValue, '5,00');
    userEvent.type(inputDescription, 'Coquinha Gelada');
    userEvent.type(inputCurrency, 'USD');
    userEvent.type(inputMethod, 'Dinheiro');
    userEvent.type(inputTag, 'Alimentação');
    userEvent.type(btnSubmit);
  });
});

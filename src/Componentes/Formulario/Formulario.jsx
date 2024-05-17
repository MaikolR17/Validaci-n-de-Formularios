import React, { useReducer } from 'react';
import './Formulario.module.css';
import ResultadoUsuario from '../ResultadoUsuario/ResultadoUsuario';

const initialState = {
  firstName: {
    value: '',
    error: null
  },
  lastName: {
    value: '',
    error: null
  },
  email: {
    value: '',
    error: null
  }
};

const validateField = (name, value) => {
    if (name === 'firstName') {
        if (value.length <= 2) {
            return `First Name must be at least 2 characters`;
        }
    }
    if (name === 'lastName') {
        if (value.length <= 2) {
            return `Last Name must be at least 2 characters`;
        }
    }
    if (name === 'email') {
        if (value.length <= 5) {
            return 'Email must be more than 5 characters';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Email is not valid';
        }
    }
  return null;
};

const reducer = (state, action) => {
  const { name, value } = action.payload;
  const error = validateField(name, value);

  return {
    ...state,
    [name]: {
      value: value,
      error: error
    }
  };
};

const Formulario = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: 'UPDATE_FIELD', payload: { name, value } });
  };

  const nuevoUsuario = {
    firstName: state.firstName.value,
    lastName: state.lastName.value,
    email: state.email.value
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={state.firstName.value}
            onChange={handleChange}
          />
          {state.firstName.error && (
            <p className="error">{state.firstName.error}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={state.lastName.value}
            onChange={handleChange}
          />
          {state.lastName.error && (
            <p className="error">{state.lastName.error}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={state.email.value}
            onChange={handleChange}
          />
          {state.email.error && (
            <p className="error">{state.email.error}</p>
          )}
        </div>
      </form>
      <ResultadoUsuario nuevoUsuario={nuevoUsuario} />
    </div>
  );
};

export default Formulario;

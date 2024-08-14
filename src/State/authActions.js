import axios from 'axios';

// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// Login Action
export const login = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    // Send login request to the correct endpoint
    const response = await axios.post('http://localhost:8000/login/', credentials);
    const data = response.data;

    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response?.data?.error || 'Login failed' });
  }
};

// Logout Action
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

// Register Action
export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });

  try {
    // Send registration request to the correct endpoint
    const response = await axios.post('http://localhost:3000/register', userData);
    const data = response.data;

    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.response?.data?.error || 'Registration failed' });
  }
};

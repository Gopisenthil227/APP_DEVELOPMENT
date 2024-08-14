// src/State/settingsActions.js
import axios from 'axios';

// Define action types
export const UPDATE_SETTINGS_REQUEST = 'UPDATE_SETTINGS_REQUEST';
export const UPDATE_SETTINGS_SUCCESS = 'UPDATE_SETTINGS_SUCCESS';
export const UPDATE_SETTINGS_FAILURE = 'UPDATE_SETTINGS_FAILURE';

// Action creator for updating settings
export const updateSettings = (settings) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SETTINGS_REQUEST });
    const { data } = await axios.put('/api/settings', settings);
    dispatch({ type: UPDATE_SETTINGS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_SETTINGS_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

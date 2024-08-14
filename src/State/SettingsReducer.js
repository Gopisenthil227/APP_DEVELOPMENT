// src/State/settingsReducer.js
const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_SETTINGS_REQUEST':
        return { ...state, loading: true };
      case 'UPDATE_SETTINGS_SUCCESS':
        return { ...state, loading: false, success: true, user: action.payload };
      case 'UPDATE_SETTINGS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default settingsReducer;
  
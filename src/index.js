import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
import { Provider } from 'react-redux';
import store from './State/Store'; // Make sure the path is correct
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

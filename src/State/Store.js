import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Corrected import
import rootReducer from '../State/authReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

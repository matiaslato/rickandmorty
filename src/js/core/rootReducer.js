import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import caracterReducer from './Caracters/reducer';

const createRootReducer = (history) =>
  combineReducers({
    caracterReducer: caracterReducer,
    router: connectRouter(history),
  });
export default createRootReducer;

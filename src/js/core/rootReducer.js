import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import characterReducer from './Characters/reducer';

const createRootReducer = (history) =>
  combineReducers({
    characterReducer: characterReducer,
    router: connectRouter(history),
  });
export default createRootReducer;

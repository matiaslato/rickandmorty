import * as actionTypes from '../constants';

const initialState = {
  results: null,
  info: {
    count: 1,
    pages: 10,
    next: 1,
    prev: null,
  },
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INFO_CARACTERS: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case actionTypes.SET_CARACTERS: {
      return {
        ...state,
        ...action.response,
      };
    }

    case actionTypes.SET_CARACTERS_NOT_FOUND: {
      return {
        results: null,
        info: {
          count: 0,
          pages: 1,
          next: 1,
          prev: null,
        },
      };
    }

    default:
      return state;
  }
};

export default accountReducer;

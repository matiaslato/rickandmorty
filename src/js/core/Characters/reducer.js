import * as actionTypes from '../constants';

const initialState = {
  results: null,
  loading: false,
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

    case actionTypes.SET_CARACTERS_START_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case actionTypes.SET_CARACTERS_FINISH_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default accountReducer;

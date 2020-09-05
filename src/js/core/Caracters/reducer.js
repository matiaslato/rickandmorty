import * as actionTypes from '../constants';

const initialState = {
  listCaracters: {},
  info: {
    count: 0,
    pages: 0,
    next: null,
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

    default:
      return state;
  }
};

export default accountReducer;

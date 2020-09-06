import * as actionTypes from '../constants';

const initialState = {
  charactersList: null,
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

    default:
      return state;
  }
};

export default accountReducer;

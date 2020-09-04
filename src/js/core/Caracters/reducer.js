import * as actionTypes from '../constants';

const initialState = {
  listCaracters: {},
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CARACTERS: {
      return {
        ...state,
        account: {
          id: action.account.account.id,
          name: action.account.account.nombre,
        },
      };
    }

    default:
      return state;
  }
};

export default accountReducer;

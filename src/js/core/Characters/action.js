import {
  GET_INFO_CARACTERS,
  GET_CARACTERS,
  GET_CARACTERS_CHANGE_PAGE,
} from '../constants';

export const getInfoCaracters = () => ({
  type: GET_INFO_CARACTERS,
});

export const getCaracters = (payload) => ({
  type: GET_CARACTERS,
  payload,
});

export const getCaractersChangePage = (payload) => ({
  type: GET_CARACTERS_CHANGE_PAGE,
  payload,
});

import { GET_INFO_CARACTERS, GET_CARACTERS } from '../constants';

export const getInfoCaracters = () => ({
  type: GET_INFO_CARACTERS,
});

export const getCaracters = (payload) => ({
  type: GET_CARACTERS,
  payload,
});

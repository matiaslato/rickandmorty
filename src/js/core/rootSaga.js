import { fork, all, takeEvery, take } from 'redux-saga/effects';

import { getInfoCaractesSagas } from './Caracters/sagas';

import * as actionTypes from './constants';

export default function* rootSaga() {
  yield all([takeEvery(actionTypes.GET_INFO_CARACTERS, getInfoCaractesSagas)]);
}

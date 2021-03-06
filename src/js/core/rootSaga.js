import { fork, all, takeEvery, take } from 'redux-saga/effects';

import {
  getInfoCaractesSagas,
  getCaractesSagas,
  getCaractesChangePage,
} from './Characters/sagas';

import * as actionTypes from './constants';

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.GET_INFO_CARACTERS, getInfoCaractesSagas),
    takeEvery(actionTypes.GET_CARACTERS, getCaractesSagas),
    takeEvery(actionTypes.GET_CARACTERS_CHANGE_PAGE, getCaractesChangePage),
  ]);
}

import { put } from 'redux-saga/effects';
import { getFirstLoadService } from './services';

export function* getInfoCaractesSagas() {
  const res = yield getFirstLoadService();
  console.log('getCaractesSagas', res.data.data.characters);
  const payload = res.data.data.characters;
  yield put({ type: 'SET_INFO_CARACTERS', payload });
}

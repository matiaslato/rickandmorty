import { put } from 'redux-saga/effects';
import { getFirstLoadService, getCharactesService } from './services';

export function* getInfoCaractesSagas() {
  console.log('getInfoCaractesSagas START');
  const res = yield getFirstLoadService();
  const payload = res.data.data.characters;
  yield put({ type: 'SET_INFO_CARACTERS', payload });
  console.log('getInfoCaractesSagas FIN');
}

export function* getCaractesSagas(payload) {
  console.log('getCaractesSagas START', payload);
  const res = yield getCharactesService(
    payload.payload.page,
    payload.payload.filterName,
    payload.payload.gender
  );
  console.log('getCaractesSagas FIN');
  //const payload = res.data.data.characters;
  //yield put({ type: 'SET_INFO_CARACTERS', payload });
}

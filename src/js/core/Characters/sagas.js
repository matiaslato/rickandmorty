import { put } from 'redux-saga/effects';
import {
  getFirstLoadService,
  getCharactesSearchService,
  getCharactesCahngePagehService,
} from './services';

export function* getInfoCaractesSagas() {
  console.log('getInfoCaractesSagas START');
  const res = yield getFirstLoadService();
  const payload = res.data.data.characters;
  yield put({ type: 'SET_INFO_CARACTERS', payload });
  console.log('getInfoCaractesSagas FIN');
}

export function* getCaractesSagas(payload) {
  console.log('getCaractesSagas START', payload.payload);
  const res = yield getCharactesSearchService(
    payload.payload.page,
    payload.payload.filterName,
    payload.payload.gender
  );
  const response = res.data.data.characters;
  response !== null
    ? yield put({ type: 'SET_CARACTERS', response })
    : yield put({ type: 'SET_CARACTERS_NOT_FOUND', response });

  console.log('getCaractesSagas FIN');
}

export function* getCaractesChangePage(payload) {
  console.log('getCaractesChangePage START', payload.payload);
  const res = yield getCharactesCahngePagehService(
    payload.payload.page,
    payload.payload.filterName,
    payload.payload.gender
  );
  const response = res.data.data.characters;
  yield put({ type: 'SET_CARACTERS', response });
  console.log('getCaractesChangePage FIN');
}

import { put } from 'redux-saga/effects';
import {
  getFirstLoadService,
  getCharactesSearchService,
  getCharactesCahngePagehService,
} from './services';

export function* getInfoCaractesSagas() {
  yield put({ type: 'SET_CARACTERS_START_LOADING' });
  try {
    const res = yield getFirstLoadService();
    const payload = res.data.data.characters;
    yield put({ type: 'SET_INFO_CARACTERS', payload });
  } catch (e) {
    console.log('ocurrio un error');
  }
  yield put({ type: 'SET_CARACTERS_FINISH_LOADING' });
}

export function* getCaractesSagas(payload) {
  yield put({ type: 'SET_CARACTERS_START_LOADING' });
  try {
    const res = yield getCharactesSearchService(
      payload.payload.page,
      payload.payload.filterName,
      payload.payload.gender
    );
    const response = res.data.data.characters;
    response !== null
      ? yield put({ type: 'SET_CARACTERS', response })
      : yield put({ type: 'SET_CARACTERS_NOT_FOUND', response });
  } catch (e) {
    console.log('ocurrio un error');
  }
  yield put({ type: 'SET_CARACTERS_FINISH_LOADING' });
}

export function* getCaractesChangePage(payload) {
  yield put({ type: 'SET_CARACTERS_START_LOADING' });
  try {
    const res = yield getCharactesCahngePagehService(
      payload.payload.page,
      payload.payload.filterName,
      payload.payload.gender
    );
    const response = res.data.data.characters;
    yield put({ type: 'SET_CARACTERS', response });
  } catch (e) {
    console.log('ocurrio un error');
  }
  yield put({ type: 'SET_CARACTERS_FINISH_LOADING' });
}

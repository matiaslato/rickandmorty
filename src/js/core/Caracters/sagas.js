import { put } from 'redux-saga/effects';

export function* getCaractesSagas(account) {
  yield put({ type: 'ACCOUNT_SET', account });
  yield yield localStorage.setItem(
    'account',
    JSON.stringify({
      id: account.account.id,
      nombre: account.account.nombre,
    })
  );
}

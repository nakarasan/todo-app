// src/store/rootSaga.ts
import { all } from 'redux-saga/effects';
import { taskSaga } from './task/sagas';

export function* rootSaga() {
  yield all([taskSaga()]);
}

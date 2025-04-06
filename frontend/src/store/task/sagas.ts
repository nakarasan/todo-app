import { put, call, takeEvery } from 'redux-saga/effects';
import { axiosInstance, apiURL } from 'config';
import toast from 'react-hot-toast';

import {
  storeTaskRequested,
  storeTaskSuccess,
  storeTaskFail,
  updateTaskRequested,
  updateTaskSuccess,
  updateTaskFail,
  loadTasksRequested,
  loadTasksSuccess,
  loadTasksFail,
} from './taskSlice';

export function* storeTaskEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.post,
      `${apiURL}/tasks`,
      action.payload
    );
    if (data?.succeeded) {
      yield put(storeTaskSuccess(data));
      yield call(loadTasksEffect, {
        payload: {},
        type: '',
      });
      toast.success('Task successfully added.');
    } else {
      toast.error('Error while adding a task', data?.errors[0]);
    }
  } catch (error: any) {
    yield put(storeTaskFail(error.message));
  }
}

export function* updateTaskEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.put,
      `${apiURL}/tasks/${action.payload}`
    );
    if (data?.succeeded) {
      yield put(updateTaskSuccess(data));
      yield call(loadTasksEffect, {
        payload: {},
        type: '',
      });
      toast.success('Task completed');
    } else {
      toast.error('Task update failed!', data?.errors);
    }
  } catch (error: any) {
    yield put(updateTaskFail(error.message));
  }
}

export function* loadTasksEffect(action: {
  type: string;
  payload: any;
}): Generator<any, void, any> {
  try {
    const { data } = yield call(
      axiosInstance.get,
      `${apiURL}/tasks`,
      action.payload
    );
    if (data?.succeeded) {
      yield put(loadTasksSuccess(data));
    }
  } catch (error: any) {
    yield put(loadTasksFail(error.message));
  }
}

export function* taskSaga(): Generator<any, void, any> {
  yield takeEvery(storeTaskRequested, storeTaskEffect);
  yield takeEvery(updateTaskRequested, updateTaskEffect);
  yield takeEvery(loadTasksRequested, loadTasksEffect);
}

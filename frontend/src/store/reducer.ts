import { combineReducers } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import taskReducer from 'store/task/taskSlice';

const appReducer = combineReducers({
  task: taskReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === PURGE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

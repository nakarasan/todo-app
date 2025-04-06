import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  loading: false,
  error: null,
  storeTask: {},
  updateTask: {},
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    storeTaskRequested(
      state,
      action: PayloadAction<{
        id: any;
        title: string;
        description: string;
      }>
    ) {
      state.loading = true;
      state.error = null;
    },
    storeTaskSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.storeTask = action.payload;
    },
    storeTaskFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateTaskRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    updateTaskSuccess(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = null;
      state.updateTask = action.payload;
    },
    updateTaskFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
    loadTasksRequested(state, action: PayloadAction<{}>) {
      state.loading = true;
      state.error = null;
    },
    loadTasksSuccess(state, action: any) {
      state.loading = false;
      state.error = null;
      state.tasks = action?.payload?.result;
    },
    loadTasksFail(state, action: PayloadAction<{}>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  storeTaskRequested,
  storeTaskSuccess,
  storeTaskFail,
  updateTaskRequested,
  updateTaskSuccess,
  updateTaskFail,
  loadTasksRequested,
  loadTasksSuccess,
  loadTasksFail,
} = taskSlice.actions;

export default taskSlice.reducer;

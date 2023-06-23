/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TaskListFilterSchema } from '../types/taskListFilterSchema';

const initialState: TaskListFilterSchema = {
  search: '',
};

export const taskListFilterSlice = createSlice({
  name: 'taskListFilter',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { actions: taskListFilterActions } = taskListFilterSlice;
export const { reducer: taskListFilterReducer } = taskListFilterSlice;

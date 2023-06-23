/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TaskFilterSchema } from '../types/taskFilterSchema';

const initialState: TaskFilterSchema = {
  search: '',
};

export const taskFilterSlice = createSlice({
  name: 'taskFilter',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { actions: taskFilterActions } = taskFilterSlice;
export const { reducer: taskFilterReducer } = taskFilterSlice;

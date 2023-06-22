/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EditTaskFormSchema } from '../types/editableTaskForm';

const initialState: EditTaskFormSchema = {
  name: undefined,
  description: undefined,
  category: undefined,
  executor: undefined,
  status: undefined,
  priority: undefined,
};

export const editTaskFormSlice = createSlice({
  name: 'editTaskForm',
  initialState,
  reducers: {
    setEditForm(state, action: PayloadAction<EditTaskFormSchema>) {
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.category = action.payload.category;
      state.executor = action.payload.executor;
      state.status = action.payload.status;
      state.priority = action.payload.priority;
    },
  },
});

export const { actions: editTaskFormActions } = editTaskFormSlice;
export const { reducer: editTaskFormReducer } = editTaskFormSlice;

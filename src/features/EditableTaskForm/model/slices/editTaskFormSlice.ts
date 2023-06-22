/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EditTaskFormSchema } from '../types/editableTaskForm';

import { PriorityType, StatusType } from '@/entities/Task';

const initialState: EditTaskFormSchema = {
  name: '',
  description: '',
  category: '',
  executor: '',
  status: 'to do',
  priority: '0',
};

export const editTaskFormSlice = createSlice({
  name: 'editTaskForm',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setExecutor(state, action: PayloadAction<string>) {
      state.executor = action.payload;
    },
    setStatus(state, action: PayloadAction<StatusType>) {
      state.status = action.payload;
    },
    setPriority(state, action: PayloadAction<PriorityType>) {
      state.priority = action.payload;
    },
  },
});

export const { actions: editTaskFormActions } = editTaskFormSlice;
export const { reducer: editTaskFormReducer } = editTaskFormSlice;

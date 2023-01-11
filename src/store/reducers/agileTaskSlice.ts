import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IAgileTask from '../../models/IAgileTask';

interface AgileTaskState {
  agileTaskList: IAgileTask[] | undefined;
  isLoading: boolean;
  error: string;
}

const initialState: AgileTaskState = {
  agileTaskList: undefined,
  isLoading: true,
  error: '',
};

export const agileTaskSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    agileTaskListFetching(state) {
      state.isLoading = true;
    },
    agileTaskListFetchingSuccess(state, action: PayloadAction<IAgileTask[]>) {
      state.isLoading = false;
      state.error = '';
      state.agileTaskList = action.payload;
    },
    agileTaskListFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default agileTaskSlice.reducer;

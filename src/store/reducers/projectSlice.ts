import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IProject from '../../models/IProject';

interface ProjectState {
  projects: IProject[] | undefined;
  isLoading: boolean;
  error: string;
}

const initialState: ProjectState = {
  projects: undefined,
  isLoading: true,
  error: '',
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    projectsFetching(state) {
      state.isLoading = true;
    },
    projectsFetchingSuccess(state, action: PayloadAction<IProject[]>) {
      state.isLoading = false;
      state.error = '';
      state.projects = action.payload;
    },
    projectsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default projectSlice.reducer;

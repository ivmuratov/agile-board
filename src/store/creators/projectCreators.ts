import axios from 'axios';

import { AppDispatch } from '..';
import IProject from '../../models/IProject';
import { projectSlice } from '../reducers/projectSlice';

export const fetchProjects = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(projectSlice.actions.projectsFetching());
    const response = await axios.get<IProject[]>('http://localhost:8080/api/projects');
    dispatch(projectSlice.actions.projectsFetchingSuccess(response.data));
  } catch (e) {
    dispatch(projectSlice.actions.projectsFetchingError(e.message));
  }
};

import axios from 'axios';

import { AppDispatch } from '..';
import IAgileTask from '../../models/IAgileTask';
import { agileTaskSlice } from '../reducers/agileTaskSlice';

export const fetchAgileTaskList = (projectId: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(agileTaskSlice.actions.agileTaskListFetching());
    const response = await axios.get<IAgileTask[]>(
      `http://localhost:8080/api/projects/${projectId}/tasks`,
    );
    dispatch(agileTaskSlice.actions.agileTaskListFetchingSuccess(response.data));
  } catch (e) {
    dispatch(agileTaskSlice.actions.agileTaskListFetchingError(e.message));
  }
};

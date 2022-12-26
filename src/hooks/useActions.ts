import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import * as actions from '../store/actions';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};

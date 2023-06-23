import { RootState } from '@/app/providers/StoreProvider';

export const getTaskListFilterSearch = (state: RootState) => state.taskListFilter.search;

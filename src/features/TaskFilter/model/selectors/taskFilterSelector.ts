import { RootState } from '@/app/providers/StoreProvider';

export const getTaskFilterSearch = (state: RootState) => state.taskFilter.search;

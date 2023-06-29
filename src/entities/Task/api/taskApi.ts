/* eslint-disable camelcase */
import { TaskSchema } from '@/entities/Task';
import { rtkApi } from '@/shared/api/rtkApi';

type GetTaskListArg = { projectId: string; search?: string };

type GetTaskListPageSearchArg = GetTaskListArg & { search?: string; page: number; limit: number };

export const taskApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getTaskList: build.query<TaskSchema[], GetTaskListArg>({
      query: ({ projectId, search = '' }) => ({
        url: `/tasks?projectId_like=${projectId}&q=${search}`,
      }),
      providesTags: ['project_tasks'],
    }),
    getTaskListPageSearch: build.query<TaskSchema[], GetTaskListPageSearchArg>({
      query: ({ projectId, search = '', page, limit = 10 }) => ({
        url: `/tasks?projectId_like=${projectId}&q=${search}&_page=${page}&_limit=${limit}`,
      }),
      providesTags: ['project_tasks'],
    }),
  }),
});

export const { useGetTaskListQuery, useGetTaskListPageSearchQuery } = taskApi;

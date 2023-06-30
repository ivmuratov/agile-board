/* eslint-disable camelcase */
import { TaskSchema } from '@/entities/Task';
import { rtkApi } from '@/shared/api/rtkApi';

type GetTaskListArg = { projectId: string; search?: string };

type GetTaskListPageSearchArg = { projectId: string; search?: string; page: number; limit: number };

type GetTaskListPageSearchResp = { data: TaskSchema[]; totalCount: number };

export const taskApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getTaskList: build.query<TaskSchema[], GetTaskListArg>({
      query: ({ projectId, search = '' }) => ({
        url: `/tasks?projectId_like=${projectId}&q=${search}`,
      }),
      providesTags: ['project_tasks'],
    }),
    getTaskListPageSearch: build.query<GetTaskListPageSearchResp, GetTaskListPageSearchArg>({
      query: ({ projectId, search = '', page, limit = 10 }) => ({
        url: `/tasks?projectId_like=${projectId}&q=${search}&_page=${page}&_limit=${limit}`,
      }),
      transformResponse: (data: TaskSchema[], meta) => {
        const totalCount = Number(meta?.response?.headers.get('X-Total-Count'));

        return { data, totalCount };
      },
      providesTags: ['project_tasks'],
    }),
  }),
});

export const { useGetTaskListQuery, useGetTaskListPageSearchQuery } = taskApi;

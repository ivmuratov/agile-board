import { TaskSchema } from '@/entities/Task';
import { rtkApi } from '@/shared/api/rtkApi';

type GetTaskListArg = { projectId: string; search?: string };

export const taskApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getTaskList: build.query<TaskSchema[], GetTaskListArg>({
      query: ({ projectId, search = '' }) => ({
        url: `/tasks?projectId_like=${projectId}&q=${search}`,
      }),
      providesTags: ['project_tasks'],
    }),
  }),
});

export const { useGetTaskListQuery } = taskApi;

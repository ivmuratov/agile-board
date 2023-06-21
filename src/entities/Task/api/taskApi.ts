import { TaskSchema } from '@/entities/Task';
import { rtkApi } from '@/shared/api/rtkApi';

export const taskApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getTaskList: build.query<TaskSchema[], string>({
      query: (projectId: string) => ({
        url: `/projects/${projectId}/tasks`,
      }),
      providesTags: ['project_tasks'],
    }),
  }),
});

export const { useGetTaskListQuery } = taskApi;

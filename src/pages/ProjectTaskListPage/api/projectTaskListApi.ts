import { TaskSchema } from '@/entities/Task';
import { rtkApi } from '@/shared/api/rtkApi';

export const projectTaskListApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getProjectTaskList: build.query<TaskSchema[], string>({
      query: (projectId: string) => ({
        url: `/projects/${projectId}/tasks`,
      }),
    }),
  }),
});

export const { useGetProjectTaskListQuery } = projectTaskListApi;

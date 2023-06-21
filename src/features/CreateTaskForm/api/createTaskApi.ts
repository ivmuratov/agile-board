import { CreateTaskFormSchema } from '../model/types/createTaskForm';

import { TaskSchema } from '@/entities/Task';
import { rtkApi } from '@/shared/api/rtkApi';

type CreateTaskFormArg = CreateTaskFormSchema & { projectId: string; createdDate: string };

export const createTaskApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    createTask: build.mutation<TaskSchema, CreateTaskFormArg>({
      query: ({ projectId, ...body }) => ({
        url: `projects/${projectId}/tasks`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['project_tasks'],
    }),
  }),
});

export const { useCreateTaskMutation } = createTaskApi;

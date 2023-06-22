import { CreateTaskFormSchema, EditTaskFormSchema } from '../model/types/editableTaskForm';

import { TaskSchema } from '@/entities/Task';
import { rtkApi } from '@/shared/api/rtkApi';

type CreateTaskFormArg = CreateTaskFormSchema & { projectId: string };

type EditTaskFormArg = EditTaskFormSchema & { id: string; projectId: string };

export const editableTaskApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    createTask: build.mutation<TaskSchema, CreateTaskFormArg>({
      query: ({ projectId, ...body }) => ({
        url: `projects/${projectId}/tasks`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['project_tasks'],
    }),
    editTask: build.mutation<TaskSchema, EditTaskFormArg>({
      query: ({ projectId, id, ...body }) => ({
        url: `projects/${projectId}/tasks/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['project_tasks'],
    }),
  }),
});

export const { useCreateTaskMutation, useEditTaskMutation } = editableTaskApi;

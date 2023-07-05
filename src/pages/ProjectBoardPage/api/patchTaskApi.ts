import { PatchTaskSchema } from '../model/types/patchTaskSchema';

import { TaskSchema } from '@/entities/Task';
import { rtkApi } from '@/shared/api/rtkApi';

type PatchTaskArg = PatchTaskSchema & { id: string; projectId: string };

export const patchTaskApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    patchTask: build.mutation<TaskSchema, PatchTaskArg>({
      query: ({ projectId, id, ...body }) => ({
        url: `projects/${projectId}/tasks/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['project_tasks'],
    }),
  }),
});

export const { usePatchTaskMutation } = patchTaskApi;

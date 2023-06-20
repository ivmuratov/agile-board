import { CreateProjectFormSchema } from '../model/types/createProjectForm';

import { ProjectSchema } from '@/entities/Project';
import { rtkApi } from '@/shared/api/rtkApi';

export const createProjectApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    createProject: build.mutation<ProjectSchema, CreateProjectFormSchema>({
      query: body => ({
        url: 'projects',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useCreateProjectMutation } = createProjectApi;

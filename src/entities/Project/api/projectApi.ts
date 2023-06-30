import { ProjectSchema } from '../model/types/project';

import { rtkApi } from '@/shared/api/rtkApi';

export const projectApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getProjectList: build.query<ProjectSchema[], void>({
      query: () => ({
        url: 'projects',
      }),
    }),
  }),
});

export const { useGetProjectListQuery } = projectApi;

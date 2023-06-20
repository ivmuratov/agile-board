import { ProjectSchema } from '@/entities/Project';
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

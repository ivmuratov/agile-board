import { Project } from '@/entities/Project';
import { rtkApi } from '@/shared/api/rtkApi';

export const projectByIdApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getProjectById: build.query<Project, string>({
      query: (projectId: string) => ({
        url: `projects/${projectId}`,
      }),
    }),
  }),
});

export const { useGetProjectByIdQuery } = projectByIdApi;

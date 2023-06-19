import { Project } from '@/entities/Project';
import { rtkApi } from '@/shared/api/rtkApi';

export const projectApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getProjectList: build.query<Project[], void>({
      query: () => ({
        url: 'projects',
      }),
    }),
    getProjectById: build.query<Project, string>({
      query: (projectId: string) => ({
        url: `projects/${projectId}`,
      }),
    }),
  }),
});

export const { useGetProjectByIdQuery, useGetProjectListQuery } = projectApi;

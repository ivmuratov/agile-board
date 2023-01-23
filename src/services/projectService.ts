import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import IProject from '../models/IProject';

export const projectAPI = createApi({
  reducerPath: 'projectAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/',
  }),
  tagTypes: ['project'],
  endpoints: build => ({
    getProjectList: build.query<IProject[], void>({
      query: () => ({
        url: 'projects',
      }),
      providesTags: () => ['project'],
    }),
    getProjectById: build.query<IProject, string>({
      query: (projectId: string) => ({
        url: `projects/${projectId}`,
      }),
    }),
  }),
});

export const { useGetProjectByIdQuery, useGetProjectListQuery } = projectAPI;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import IAgileTask from '../models/IAgileTask';

export const agileTaskAPI = createApi({
  reducerPath: ' agileTaskAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/projects/',
  }),
  tagTypes: ['agileTask'],
  endpoints: build => ({
    getAgileTaskList: build.query<IAgileTask[], string>({
      query: (projectId: string) => ({
        url: `${projectId}/tasks`,
      }),
      providesTags: () => ['agileTask'],
    }),
  }),
});

export const { useGetAgileTaskListQuery } = agileTaskAPI;

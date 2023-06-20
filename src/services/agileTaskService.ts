import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { TaskSchema } from '@/entities/Task';

export const agileTaskAPI = createApi({
  reducerPath: ' agileTaskAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/projects/',
  }),
  tagTypes: ['agileTask'],
  endpoints: build => ({
    getAgileTaskList: build.query<TaskSchema[], string>({
      query: (projectId: string) => ({
        url: `${projectId}/tasks`,
      }),
      providesTags: () => ['agileTask'],
    }),
  }),
});

export const { useGetAgileTaskListQuery } = agileTaskAPI;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/',
    /* prepareHeaders: headers => {}, */
  }),
  tagTypes: ['project_tasks'],
  endpoints: builder => ({}),
});

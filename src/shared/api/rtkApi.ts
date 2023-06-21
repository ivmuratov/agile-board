import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/',
    /* prepareHeaders: headers => {
      const token = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '';
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    }, */
  }),
  tagTypes: ['project_tasks'],
  endpoints: builder => ({}),
});

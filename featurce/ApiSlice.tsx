import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const SliceApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.222.224:3300/route/api',
  }),
  endpoints: (builder: {
    query: (arg0: {
      query: ({page}: {page?: number | undefined}) => string;
    }) => any;
  }) => ({
    fetchItems: builder.query({
      query: ({page = 1}) => `/movie/retrive?page=${page}`,
    }),
  }),
});

export const {useFetchItemsQuery} = SliceApi;

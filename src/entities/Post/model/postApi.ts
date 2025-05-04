import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.0.2.2:3001'
    }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: ({ result }) => {
                return result
                ? [ ...result.map(({id}) => ({ type: 'Comment', id})), ['Post']]
                : ['Post'] 
            }
        })
    })
});

export const { useGetPostsQuery } = postApi;
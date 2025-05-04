import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentApi = createApi({
    reducerPath: 'commentApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.0.2.2:3001',
    }),
    tagTypes: ['Comment'],
    endpoints: (builder) => ({
        getAllComments: builder.query({
            query: (postId) => ({
                url: `/comments?postId=${postId}`,
            }),
            providesTags: (result) => {
                return result 
                ? [ ...result.map(({ id }) => ({ Type: 'Comment', id})), 'Comment']
                : ['Comment']
            },
        })
    })
})

export const { useGetAllCommentsQuery } = commentApi;
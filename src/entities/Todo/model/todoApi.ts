import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://10.0.2.2:3001'}),
    tagTypes: ['Todo'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',
            providesTags: (result) => {
                return result
                ? [...result.map(({ id }) => ({ type: 'Todo', id })), 'Todo']
                : ['Todo']
            },
                
        }),
        addTodo: builder.mutation({
            query: (data) => ({
                url: '/todos',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Todo']
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Todo', id }]
        })
    })
})

export const {
    useGetTodosQuery,
    useDeleteTodoMutation,
    useAddTodoMutation
} = todoApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Todo = {
    id: string;
    title: string;
}

export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://10.0.2.2:3000'}),
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
        updateTodo: builder.mutation({
            query: ({todoId, ...title}) => {
                return {
                    url: `/todos/${todoId}`,
                    method: 'PATCH',
                    body: title
                }},
                invalidatesTags: (result, error, { todoId }) => {
                    return [
                    { type: "Todo", id: todoId },
                  ]},
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
    useAddTodoMutation,
    useUpdateTodoMutation,
} = todoApi;
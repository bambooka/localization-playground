import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToDoEndpoint } from "../../shared/api/endpoints/todos";

export const getAllTodos = createAsyncThunk(
    'todos/getAll',
    async (_, thunkAPI) => {
        const response = await ToDoEndpoint.getAllTodos();
        return response.data;
    }
)

export const deleteTodo = createAsyncThunk(
    'todos/delete',
    async(id: number, thunkAPI) => {
        const response = await ToDoEndpoint.deleteTodo(id)
        return { id: id }
    }
)

export const editTodo = createAsyncThunk(
    'todos/edit',
    async({id, data}: { id: number, data: { title: string }}, thunkAPI) => {
        const response = await ToDoEndpoint.editTodo({id, data});
        // console.log(response.data)
        return { id: id, title: 'new 0'};
    }
)
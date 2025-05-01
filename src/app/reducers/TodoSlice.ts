import { createSlice } from "@reduxjs/toolkit";
import { deleteTodo, editTodo, getAllTodos } from "./TodosActionCreators";

interface ITodo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

interface TodoState {
    todos: ITodo[],
    isLoading: boolean,
    error: string
}

const initialState: TodoState = {
    todos: [],
    isLoading: false,
    error: '',
}

const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllTodos.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllTodos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.todos = action.payload;
            })
            .addCase(getAllTodos.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error
            })
            .addCase(deleteTodo.pending, (state) => {
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(editTodo.pending, (state, action) => {

            })
            .addCase(editTodo.fulfilled, (state, action) => {
                console.log(action)
                const updatedIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
                if (updatedIndex > -1) {
                    state.todos[updatedIndex] = { ...state.todos[updatedIndex], ...action.payload};
                }
            })
            .addCase(editTodo.rejected, (state, action) => {
                state.error = action.error;
            })

    }

})

export default TodoSlice.reducer;
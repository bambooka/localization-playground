import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from '../../entities/Todo/model/todoApi';
import { commentApi } from '../../entities/Comment/model/commentApi';
import { postApi } from "../../entities/Post/model/postApi"


export const store = () => {
    return configureStore({
        reducer: {
            [todoApi.reducerPath]: todoApi.reducer,
            [postApi.reducerPath]: postApi.reducer,
            [commentApi.reducerPath]: commentApi.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(todoApi.middleware)
                .concat(postApi.middleware)
                .concat(commentApi.middleware),
    })
}


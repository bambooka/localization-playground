import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from '../../features/add-todo/api/todoApi'


export const store = () => {
    return configureStore({
        reducer: {
            [todoApi.reducerPath]: todoApi.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(todoApi.middleware),
    })
}


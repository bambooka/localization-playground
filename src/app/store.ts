import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from './reducers/UserSlice';
import todos from './reducers/TodoSlice';

const rootReducer = combineReducers({
    user,
    todos
});

export const store = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch'];
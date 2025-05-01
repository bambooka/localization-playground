import { UsersEndpoint } from "../../shared/api/endpoints/users";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        const response = await UsersEndpoint.getAllUsers();
        return response.data;
    },
)
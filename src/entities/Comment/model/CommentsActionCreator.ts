import { createAsyncThunk } from "@reduxjs/toolkit";
import { CommentsEndpoint } from '../../../shared/api/endpoints/comments';

export const getAllComments = createAsyncThunk(
    'comments/getAll',
    async (id, thunkAPI) => {
        const response = await CommentsEndpoint.getComments(id);
        return response.data;
    }
)
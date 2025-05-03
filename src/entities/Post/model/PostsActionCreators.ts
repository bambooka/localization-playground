import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostsEndpoint } from "@shared/api/endpoints/posts";

export const getAllPosts = createAsyncThunk(
    'posts',
     async (_, thunkAPI) => {
        const response = await PostsEndpoint.getPosts();
        return response.data;
     }
)
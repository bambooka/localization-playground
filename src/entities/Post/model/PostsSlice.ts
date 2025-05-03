import { getAllPosts } from "./PostsActionCreators";
import { createSlice } from "@reduxjs/toolkit"

interface IPost {
    userId: number;
    id: number;
    name: string;
    body: string;
}

interface PostsState {
    posts: IPost[],
    isLoading: boolean,
    error: string;
}

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    error: ''
}

const PostsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllPosts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload
        })
        .addCase(getAllPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = '';
        })
    }
})

export default PostsSlice.reducer;

import { getAllComments } from "../../Comment/model/CommentsActionCreator";
import { createSlice } from "@reduxjs/toolkit"

interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface CommentsState {
    comments: IComment[];
    isLoading: boolean;
    error: string;
}

const initialState: CommentsState = {
    comments: [],
    isLoading: false,
    error: ''
}

const CommentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllComments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.comments = action.payload;
            })
            .addCase(getAllComments.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})

export default CommentsSlice.reducer;
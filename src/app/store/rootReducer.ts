import { combineReducers } from "@reduxjs/toolkit";
import todos from '@entities/Todo/model/TodoSlice';
import posts from '@entities/Post/model/PostsSlice';
import comments from '@entities/Comment/model/CommentSlice';

export const rootReducer = combineReducers({
    todos,
    posts,
    comments
});
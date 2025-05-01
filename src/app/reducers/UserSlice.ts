import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../reducers/actionCreators";
interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error:'',
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
       builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        })
        .addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })
    }
})

export default UserSlice.reducer;
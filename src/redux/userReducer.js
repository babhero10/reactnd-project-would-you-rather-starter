import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API functions
import { _getUsers } from "./_DATA";

export const getAllUsers = createAsyncThunk(
    'users/all',
    async () => {
        const res = await _getUsers();
        return res;
    }
)

const usersSlice = createSlice({
    name:"user",
    initialState: {
        login: false,
        allUsers: {},
        currentUser: {},
        loading: "loading"
    }, 
    reducers: {
        login: (state, {payload}) => {
            state.currentUser = payload
        },
        logout: (state) => {
            state.curretnUser = {}
        }
    },
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.loading = "loading"
        },
        [getAllUsers.fulfilled]: (state, {payload}) => {
            state.loading = "loaded";
            state.allUsers = payload
        },
        [getAllUsers.rejected]: (state) => {
            state.loading = "failed"
        }
    }
});

export const {login, logout} = usersSlice.actions;
export default usersSlice.reducer;
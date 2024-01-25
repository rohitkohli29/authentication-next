import { createSlice } from "@reduxjs/toolkit";

const token = createSlice({
    name: "token",
    initialState: {
        token: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
    }
})

export default token;
export const { setToken } = token.actions;
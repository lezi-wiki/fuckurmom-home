import { createSlice } from "@reduxjs/toolkit";
import { createTheme, Theme } from "@mui/material";

const initState: Theme = createTheme();

const themeSlice = createSlice({
    name: "theme",
    initialState: initState,
    reducers: {
        toggleColorMode(state) {
            state.palette.mode = state.palette.mode === "light" ? "dark" : "light";
        },
    },
});

export const { toggleColorMode } = themeSlice.actions;
export default themeSlice.reducer;

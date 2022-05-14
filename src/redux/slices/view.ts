import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ViewUpdateState {
    title: string | null;
    sidebarOpen: boolean;
}

const initState: ViewUpdateState = {
    title: null,
    sidebarOpen: false,
};

const viewUpdateSlice = createSlice({
    name: "viewUpdate",
    initialState: initState,
    reducers: {
        setTitle(state, action: PayloadAction<string>) {
            return {
                ...state,
                title: action.payload,
            };
        },
        setSidebarOpen(state, action: PayloadAction<boolean>) {
            return {
                ...state,
                sidebarOpen: action.payload,
            };
        },
    },
});

export const { setTitle, setSidebarOpen } = viewUpdateSlice.actions;
export default viewUpdateSlice.reducer;

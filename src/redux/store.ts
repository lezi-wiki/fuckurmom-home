import { configureStore } from "@reduxjs/toolkit";
import view from "./slices/view";
import data from "./slices/data";

const store = configureStore({
    reducer: {
        view,
        data,
    },
    devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

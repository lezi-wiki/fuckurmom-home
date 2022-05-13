import { configureStore } from "@reduxjs/toolkit";
import view from "./slices/view";
import data from "./slices/data";
import theme from "./slices/theme";

const store = configureStore({
    reducer: {
        view,
        data,
        theme,
    },
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

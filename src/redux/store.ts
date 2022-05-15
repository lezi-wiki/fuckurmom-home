import { configureStore } from "@reduxjs/toolkit";
import view from "./slices/view";
import data from "./slices/data";
import localDataApi from "../service/localDataApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        view,
        data,
        [localDataApi.reducerPath]: localDataApi.reducer,
    },
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk).concat(localDataApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export default store;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SubDomainInfo from "../../model/subDomainInfo";

export type DataState = SubDomainInfo[];

const initState: DataState = [];

const dataSlice = createSlice({
    name: "data",
    initialState: initState,
    reducers: {
        addData(state, action: PayloadAction<SubDomainInfo>) {
            state.push(action.payload);
        },
        addDataArray(state: DataState, action: PayloadAction<Array<SubDomainInfo>>) {
            for (let subDomainInfo of action.payload) {
                state.push(subDomainInfo);
            }
        },
        clearData(state) {
            state = [];
        },
    },
});

export const { addData, addDataArray, clearData } = dataSlice.actions;
export default dataSlice.reducer;

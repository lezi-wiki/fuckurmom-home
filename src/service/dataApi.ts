import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import SubDomainInfo from "../model/subDomainInfo";

const DataApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.fuckur.mom/",
    }),
    tagTypes: [],
    endpoints: (build) => ({
        getAllInfo: build.query<SubDomainInfo[], null>({
            query: () => ({ url: "/info" }),
        }),
    }),
});

export const { useGetAllInfoQuery, useLazyGetAllInfoQuery } = DataApi;
export default DataApi;

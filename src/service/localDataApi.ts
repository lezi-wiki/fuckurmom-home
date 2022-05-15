import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import SubDomainInfo from "../model/subDomainInfo";

const LocalDataApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "/",
    }),
    tagTypes: [],
    endpoints: (build) => ({
        getAllInfo: build.query<SubDomainInfo[], null>({
            query: () => ({ url: "/info.json" }),
        }),
    }),
});

export const { useGetAllInfoQuery, useLazyGetAllInfoQuery } = LocalDataApi;
export default LocalDataApi;

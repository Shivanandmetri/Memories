import { api } from "./api";

const extendedapi = api.injectEndpoints({
  endpoints: (build) => ({
    getDocument: build.query({
      query: () => ({ url: "http://localhost:8082/posts" }),
    }),
  }),
//   getpostCall:build.mutation
});

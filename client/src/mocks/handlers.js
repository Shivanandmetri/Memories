import { getposts } from "./getPosts";

export const handlers = [
  // And here's a request handler with MSW
  // for the same "GET /user" request that
  // responds with a mock JSON response.
getposts,
];

import { rest } from "msw";
export const response = [
  {
    _id: "66c812eccf1855420b2fce7f",
    title: "Tour",
    message: "Lorem Ipsum",
    creator: "Shivanand M",
    tags: ["# Hampi Tour"],
    selectedFile: "",
    likeCount: 50,
    createdAt: "Fri Aug 23 2024 10:09:43 GMT+0530 (India Standard Time)",
    __v: 0,
  },
  {
    _id: "66c8312dcf1855420b2fceb6",
    title: "TRIP",
    message: "Shivanand M",
    creator: "Raju",
    tags: ["# Dandeli"],
    selectedFile: "",
    likeCount: 0,
    createdAt: "Fri Aug 23 2024 10:09:43 GMT+0530 (India Standard Time)",
    __v: 0,
  },
  {
    _id: "66c832d7cf1855420b2fcec1",
    title: "Picnic",
    message: "Lorem ipsum",
    creator: "Swamy",
    tags: ["# Manali"],
    selectedFile: "",
    likeCount: 0,
    createdAt: "Fri Aug 23 2024 10:09:43 GMT+0530 (India Standard Time)",
    __v: 0,
  },
];

// export const errorresponse = {
//   status: 400,
//   json: "Bad Request Raju",
// };

export const getposts = rest.get(
  "http://localhost:8082/posts",
  (req, res, ctx) => {
    return res(ctx.delay(800), ctx.status(200), ctx.json(response));
  }
);

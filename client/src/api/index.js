import axios from "axios";

const url = "http://localhost:8082/posts";

export const fetchPosts = () => {
  const data = axios.get(url);
  //   console.log(data);
};

import axios from "axios";

const url = "http://localhost:8082/posts";

export const fetchPosts = async () => {
  const { data } = await axios.get(url);
  return data;
};

export const createPost = (data) => {
  axios.post(`${url}/createpost`, data);
};

export const updatePost = (id, data) => {
  axios.put(`${url}/:${id}`, data);
};
export const likePost = (id, data) => {
  axios.put(`${url}/like/${id}`, data);
};

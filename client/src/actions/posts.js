import * as api from "../api";

// action creator
export const getPosts = () => async (dispatch) => {
  try {
    const data = await api.fetchPosts();
    dispatch({
      type: "FETCH_ALL",
      payload: data,
    });
  } catch (error) {
    console.log("fetch", error?.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const data = await api.createPost(post);
    dispatch({
      type: "CREATE",
      payload: data,
    });
  } catch (error) {
    console.log("err", error.message);
  }
};

export const UpdatePost = (id, post) => async (dispatch) => {
  try {
    const data = await api.updatePost(id, post);
    console.log("update", data);
    dispatch({
      type: "UPDATE",
      payload: data,
    });
  } catch (error) {
    console.log("err", error.message);
  }
};

export const increaseLike = (id, post) => async (dispatch) => {
  try {
    const data = await api.likePost(id, post);
    dispatch({
      type: "LIKE",
      payload: data,
    });
  } catch (error) {
    console.log("err", error.message);
  }
};

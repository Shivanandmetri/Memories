import * as api from "../api";

// action creator
export const getPosts = () => async (dispatch) => {
  try {
    const {data} = await api.fetchPosts();
    console.log("lllll",data);
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
    const { data } = await api.createPost(post);
    console.log(data);
    dispatch({
      type: "CREATE",
      payload: data,
    });
  } catch (error) {
    console.log("err", error.message);
  }
};

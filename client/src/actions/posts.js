import * as api from "../api";

// action creator
const getPosts = () => async (dispatch) => {
  try {
    // const { data } = await api.fetchPosts();
    dispatch({
      type: "FETCH_ALL",
      payload: "grrr",
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default getPosts;

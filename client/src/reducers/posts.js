const initialState = [];

const reducer = (posts = initialState, action) => {
  switch (action.type) {
    case "CREATE":
      return [...posts, action.payload];
    case "FETCH_ALL":
      return posts;

    default:
      return posts;
  }
};

export default reducer;

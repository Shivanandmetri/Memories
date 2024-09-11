const initialState = [];

const reducer = (posts = initialState, action) => {
  switch (action.type) {
    case "CREATE":
      return [...posts, action.payload];
    case "FETCH_ALL":
      return action.payload;
    case "UPDATE":
      return [...posts, action.payload];
    case "LIKE":
      return [...posts, action.payload];

    default:
      return posts;
  }
};

export default reducer;

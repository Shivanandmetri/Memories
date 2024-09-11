import React from "react";
import Post from "./Post/Post";
import { CircularProgress, Grid } from "@mui/material";
import useStyles from "./styles.js";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId, currentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log("posts from store", posts);
  const classes = useStyles();
  return !posts?.length ? (
    <CircularProgress color="primary" />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post?._id} xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} currentId={currentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;

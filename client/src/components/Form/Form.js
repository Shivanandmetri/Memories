import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import useStyles from "./styles.js";
import { createPost, UpdatePost } from "../../actions/posts.js";
import { useDispatch } from "react-redux";
import FileBase64 from "react-file-base64";

const Form = ({ currentId, setcurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(UpdatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
  };

  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        className={classes.form}
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        {Object.keys(postData).map((item) =>
          item === "selectedFile" ? (
            <div className={classes.fileInput} key={item}>
              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => {
                  console.log(base64);
                  setPostData({
                    ...postData,
                    selectedFile: base64,
                  });
                }}
              />
            </div>
          ) : (
            <TextField
              key={item}
              required
              name={item}
              variant="outlined"
              label={item.slice(0, 1).toLocaleUpperCase() + item.slice(1)}
              fullWidth
              value={postData?.item}
              onChange={(e) =>
                setPostData({ ...postData, [item]: e.target.value })
              }
            />
          )
        )}

        <Button
          type="submit"
          size="small"
          variant="contained"
          color="primary"
          fullWidth
        >
          Submit
        </Button>
        <Button
          onClick={clear}
          size="small"
          variant="contained"
          color="secondary"
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

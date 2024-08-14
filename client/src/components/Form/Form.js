import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import useStyles from "./styles.js";
import { createPost } from "../../actions/posts.js";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  async function Main() {
    const file = document.getElementById("myfile")?.files[0];
    if (file) {
      const base64 = await toBase64(file);
      setPostData((p) => ({ ...p, selectedFile: base64 }));
    } else {
      setPostData((p) => ({ ...p, selectedFile: "No File Selected" }));
    }
  }

  console.log(postData);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    Main();
    dispatch(createPost(postData));
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
              <input type="file" id="myfile" />
            </div>
          ) : (
            <TextField
              key={item}
              required
              name={item}
              variant="outlined"
              label={item.slice(0, 1).toLocaleUpperCase() + item.slice(1)}
              fullWidth
              value={postData.item}
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

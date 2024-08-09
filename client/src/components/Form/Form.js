import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";

import useStyles from "./styles.js";
const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    console.log(postData);
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
        {Object.keys(postData).map((item) => (
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
        ))}
        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

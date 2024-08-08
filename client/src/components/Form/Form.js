import React, { useState } from "react";
import { TextField, Button, Typography, Paper, Container } from "@mui/material";

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
    console.log("dddd");
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
        <TextField
          name="creator"
          variant="outlined"
          label="Creartor"
          fullWidth
          value={postData.creator}
          onChange={(e) => e.target.value}
        />
        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

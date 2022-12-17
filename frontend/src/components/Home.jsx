import React from "react";
import PostList from "./PostList";
import Sidebar from "./Sidebar";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <Grid container spacing={3}>
      <PostList />
      <Sidebar />
    </Grid>
  );
};

export default Home;

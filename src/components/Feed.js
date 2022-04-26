import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";
/* import { ExpandMore } from "@mui/icons-material"; */

const Feed = () => {
  return (
    <Box flex={4} p={3} marginTop={4}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;

import React from "react";
import { Box } from "@chakra-ui/core";
import { Routes, Route } from "react-router-dom";

import PostList from "./PostList";
import Post from "./Post";

const App = () => {
  return (
    <Box m="0 auto" maxWidth={550} px={6} py={8}>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/:id" element={<Post />} />
      </Routes>
    </Box>
  );
};

export default App;

import React from "react";
import {
  List,
  ListItem,
  Heading,
  Stack,
  Divider,
  Link,
  Text
} from "@chakra-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";
import { fetchPosts } from "./httpClient";

const PostList = () => {
  const { data: posts, status } = useQuery("posts", fetchPosts);

  if (status === "error") {
    return <Text>Something is wrong..</Text>;
  }

  return (
    <Stack spacing={6} py={4}>
      <Stack spacing={1}>
        <Heading as="h1">All Posts</Heading>
        <Text color="gray.600">Dive deep in our collection of posts</Text>
      </Stack>
      <Divider />
      <List spacing={4}>
        {posts ? (
          posts.map(post => (
            <ListItem key={post.id}>
              <Link as={RouterLink} to={`/${post.id}`} color="blue.500">
                {post.title}
              </Link>
            </ListItem>
          ))
        ) : (
          <Skeleton count={5} />
        )}
      </List>
    </Stack>
  );
};

export default PostList;

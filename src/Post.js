import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { Heading, Text, Stack, Link, Icon, Divider } from "@chakra-ui/core";
import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";

import { fetchPostById } from "./httpClient";
import Author from "./Author";
import Comments from "./Comments";

const Post = () => {
  const { id } = useParams();
  const { data: post, status } = useQuery(["post", { id }], fetchPostById);

  if (status === "error") {
    return (
      <Text>
        There is something wrong{" "}
        <span role="img" aria-label="sad face">
          😭
        </span>
      </Text>
    );
  }

  return (
    <Stack spacing={6}>
      <Link as={RouterLink} to="/" color="blue.600" fontSize="sm">
        <Icon name="arrow-back" mr={2} />
        Back to Posts
      </Link>
      <Stack spacing={4}>
        <Author userId={post?.userId} />
        <Heading as="h1" size="lg">
          {post ? post.title : <Skeleton />}
        </Heading>
        {Array(4).fill(
          <Text fontSize="sm" color="gray.600">
            {post ? post.body : <Skeleton count={2} />}
          </Text>
        )}
      </Stack>
      <Divider />
      <Comments postId={post?.id} />
    </Stack>
  );
};

export default Post;

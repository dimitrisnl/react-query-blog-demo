import React from "react";
import { Text, Heading, Stack } from "@chakra-ui/core";
import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";

import { fetchCommentsByPostId } from "./httpClient";

const Comments = ({ postId }) => {
  const { data: comments, status } = useQuery(
    postId && ["comments", { id: postId }],
    fetchCommentsByPostId
  );

  if (status === "error") {
    return <Text>Couldn't load the comments</Text>;
  }

  if (status === "loading") {
    return <Skeleton count={4} />;
  }

  if (!comments) {
    return null;
  }

  return (
    <Stack spacing={6}>
      <Heading as="h3" size="md">
        Comments
      </Heading>
      <Stack spacing={6}>
        {comments.map(comment => (
          <Stack
            key={comment.id}
            spacing={2}
            padding={2}
            paddingLeft={4}
            bg="gray.50"
            borderRadius="md"
            borderLeftWidth={3}
            borderLeftColor="blue.400"
            boxShadow="sm"
          >
            <Text fontSize="sm">{comment.body}</Text>
            <Text fontSize="xs" fontWeight="medium">
              - {comment.email.split("@")[0]}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
export default Comments;

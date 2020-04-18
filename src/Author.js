import React from "react";
import { Text, Link } from "@chakra-ui/core";
import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";

import { fetchAuthorById } from "./httpClient";

const Author = ({ userId }) => {
  const { data: author, status: authorStatus } = useQuery(
    userId && ["author", { id: userId }],
    fetchAuthorById
  );

  if (authorStatus === "error") {
    return null;
  }

  return (
    <Text fontSize="sm">
      {author ? (
        <Link isExternal href={`mailto:${author.email}`} color="blue.600">
          {author.name}
        </Link>
      ) : (
        <Skeleton width={100} />
      )}
    </Text>
  );
};

export default Author;

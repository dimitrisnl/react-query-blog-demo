const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = () => {
  return fetch(`${BASE_URL}/posts`).then(response => response.json());
};

export const fetchPostById = (_key, { id }) => {
  return fetch(`${BASE_URL}/posts/${id}`).then(response => response.json());
};

export const fetchAuthorById = (_key, { id }) => {
  return fetch(`${BASE_URL}/users/${id}`).then(response => response.json());
};

export const fetchCommentsByPostId = (_key, { id }) => {
  return fetch(`${BASE_URL}/posts/${id}/comments`).then(response =>
    response.json()
  );
};

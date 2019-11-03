import React from "react";

export default function Posts({ posts }) {
  const postItems = posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));
  return (
    <div>
      <h2>Posts</h2>
      {postItems}
    </div>
  );
}

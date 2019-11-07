import React, { useState } from "react";
import { createPost } from "../actions";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <div>
      <h2>Add Posts</h2>
      <form onSubmit={event => handleSubmit(event)}>
        <div>
          <label> Title:</label>
          <br />
          <input
            type="text"
            name="title"
            placeholder="Title..."
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label> Body:</label>
          <br />
          <textarea
            type="text"
            name="body"
            placeholder="Body..."
            value={body}
            onChange={event => setBody(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    //console.log(data);
    createPost(data);
  }
}

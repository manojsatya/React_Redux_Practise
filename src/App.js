import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, fetchUsers } from "./actions";
import "./App.css";
import Posts from "./Posts";
import PostForm from "./PostForm";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const posts = useSelector(state => state.fetchUsers);

  const dispatch = useDispatch();
  const getUsers = () => dispatch(fetchUsers());
  // const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then(res => res.json())
    //   .then(posts => setPosts(posts));

    getUsers();
  }, []);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Counter is: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())}>Subtract</button>
      {isLogged && <h3>Can see if only logged in</h3>}
      <PostForm />
      <Posts posts={posts} />
    </div>
  );
}

export default App;

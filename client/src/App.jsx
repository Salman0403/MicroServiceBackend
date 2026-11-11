import React from "react";
import "./App.css";
import CreatePost from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <div className="container">
      <CreatePost />
      <PostList />
    </div>
  );
}

export default App;

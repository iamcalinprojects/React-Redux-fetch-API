import React from "react";
import PostList from "./PostList";

const App = () => {
  return (
    <div className='ui raised very padded text container segment'>
      <center>
        <h1>All Posts from blog</h1>
      </center>
      <PostList></PostList>
    </div>
  );
};

export default App;

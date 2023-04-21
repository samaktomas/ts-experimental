import NewPost from "@/components/NewPost";
import Posts from "@/components/Posts";
import React from "react";

async function Chat() {
  // fetch init data on server
  // const data = await fetch("http://localhost:3000/api/posts").then((res) =>
  //   res.json()
  // );

  return (
    <div>
      <NewPost />
      <Posts />
    </div>
  );
}

export default Chat;

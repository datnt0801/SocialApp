import axios from "axios";
import React, { useEffect } from "react";

const baseURL = "http://localhost:5000/auth/login";

export default function App() {
  const [post, setPost] = React.useState({
    title: '',
    body: ''
  });

  useEffect(() => {
    axios.post(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
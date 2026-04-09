"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");

  const fetchPosts = async () => {
    const res = await fetch("/api/posts_data");
    const data = await res.json();
    setPosts(data);
  };

  const addPost = async () => {
    await fetch("/api/posts_data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        body: "",
        author: "",
      }),
    });
    setTitle("");
    fetchPosts();
  };

  const deletePost = async (id) => {
    await fetch("/api/posts_data", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>MySQL Posts</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <button onClick={addPost}>Add</button>

      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong> - {p.author}
            <button onClick={() => deletePost(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
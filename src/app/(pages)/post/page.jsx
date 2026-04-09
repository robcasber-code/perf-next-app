"use client";
import { useState, useEffect } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const fetchPosts = async () => {
    setLoading(true);
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  };

  const createPost = async () => {
    if (!newTitle) return;
    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "create", data: { title: newTitle, body: "Sample body", author: "Me" } }),
    });
    setNewTitle("");
    fetchPosts();
  };

  const deletePost = async (id) => {
    await fetch("/api/posts", {
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
      <h1>Posts (Client Fetch)</h1>

      <input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="New post title" />
      <button onClick={createPost} disabled={loading}>{loading ? "Creating..." : "Add Post"}</button>

      <ul style={{ marginTop: "1rem" }}>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <strong>{post.title}</strong> — {post.author}
            <p>{post.body}</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
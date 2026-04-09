"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";

export default function Page() {
  const { posts, addPost, deletePost, users, addUser, deleteUser, darkMode, toggleDarkMode } = useStore();

  const [postTitle, setPostTitle] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <div style={{ padding: "2rem", background: darkMode ? "#222" : "#fff", color: darkMode ? "#fff" : "#000", minHeight: "100vh" }}>
      <h1>Zustand Demo: Posts & Users</h1>

      <button onClick={toggleDarkMode} style={{ marginBottom: "1rem" }}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      {/* Posts Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Posts ({posts.length})</h2>
        <input
          type="text"
          placeholder="Post title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <button
          onClick={() => {
            if (!postTitle) return;
            addPost({ id: Date.now(), title: postTitle });
            setPostTitle("");
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Add Post
        </button>

        <ul style={{ marginTop: "1rem" }}>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: "0.5rem" }}>
              {post.title}{" "}
              <button onClick={() => deletePost(post.id)} style={{ marginLeft: "0.5rem" }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Users Section */}
      <section>
        <h2>Users ({users.length})</h2>
        <input
          type="text"
          placeholder="User name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={() => {
            if (!userName) return;
            addUser({ id: Date.now(), name: userName });
            setUserName("");
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Add User
        </button>

        <ul style={{ marginTop: "1rem" }}>
          {users.map((user) => (
            <li key={user.id} style={{ marginBottom: "0.5rem" }}>
              {user.name}{" "}
              <button onClick={() => deleteUser(user.id)} style={{ marginLeft: "0.5rem" }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
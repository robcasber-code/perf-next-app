"use client";

import { useStore } from "@/store/useStore";

export default function PreviewPage() {
  const { posts, users, darkMode } = useStore();

  return (
    <div
      style={{
        padding: "2rem",
        background: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <h1>Preview Page</h1>

      {/* Posts Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Posts ({posts.length})</h2>
        <ul>
          {posts.map((post, index) => (
            <li key={post.id}>
              {index + 1}. {post.title}
            </li>
          ))}
        </ul>
      </section>

      {/* Users Section */}
      <section>
        <h2>Users ({users.length})</h2>
        <ul>
          {users.map((user, index) => (
            <li key={user.id}>
              {index + 1}. {user.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
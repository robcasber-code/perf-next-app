"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch posts from API
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/sample");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Posts</h1>
      <button onClick={fetchPosts} disabled={loading}>
        {loading ? "Fetching..." : "Refetch Posts"}
      </button>

      <div style={{ marginTop: "1rem" }}>
        {posts.slice(0, 5).map((post, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <h3>
              {index + 1}. {post.author || "Unknown"}
            </h3>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
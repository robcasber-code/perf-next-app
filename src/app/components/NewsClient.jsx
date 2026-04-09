// app/components/NewsClient.js
"use client";

import { useEffect, useState } from "react";

export default function NewsClient() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => res.json())
      .then(data => {
        setNews(data);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      <h2>News with Client Fetch (useEffect)</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {news.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
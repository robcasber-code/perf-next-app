import db from "@/lib/db";

// GET all posts
export async function getAllPosts() {
  const [rows] = await db.query("SELECT * FROM posts ORDER BY id DESC");
  return rows;
}

// CREATE post
export async function createPost({ title, body, author }) {
  const [result] = await db.query(
    "INSERT INTO posts (title, body, author) VALUES (?, ?, ?)",
    [title, body, author]
  );

  return { id: result.insertId, title, body, author };
}

// UPDATE post
export async function updatePost(id, data) {
  await db.query(
    "UPDATE posts SET title=?, body=?, author=? WHERE id=?",
    [data.title, data.body, data.author, id]
  );

  return { id, ...data };
}

// DELETE post
export async function deletePost(id) {
  await db.query("DELETE FROM posts WHERE id=?", [id]);
  return { id };
}
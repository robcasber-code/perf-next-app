let posts = [
  { id: 1, title: "First Post", body: "Hello", author: "Alice" },
  { id: 2, title: "Second Post", body: "World", author: "Bob" },
];

export function getAllPosts() {
  return posts;
}

export function getPostById(id) {
  return posts.find((p) => p.id === Number(id));
}

export function createPost({ title, body, author }) {
  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title: title || "Untitled",
    body: body || "",
    author: author || "Unknown",
  };
  posts.push(newPost);
  return newPost;
}

export function bulkCreatePosts(postArray) {
  const createdPosts = postArray.map((item, i) => {
    const post = {
      id: posts.length + i + 1,
      title: item.title || "Untitled",
      body: item.body || "",
      author: item.author || "Unknown",
    };
    posts.push(post);
    return post;
  });
  return createdPosts;
}

export function updatePost(id, data) {
  const index = posts.findIndex((p) => p.id === Number(id));
  if (index === -1) return null;

  posts[index] = { ...posts[index], ...data };
  return posts[index];
}

export function deletePost(id) {
  const index = posts.findIndex((p) => p.id === Number(id));
  if (index === -1) return null;

  return posts.splice(index, 1)[0];
}
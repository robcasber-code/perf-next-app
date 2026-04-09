export default async function Blog() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    next: { revalidate: 10 } // ISR
  });
  const posts = await res.json();

  return (
    <div>
      <h1>Static Blog (App Router)</h1>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav
      style={{
        width: "200px",
        background: "#f0f0f0",
        padding: "20px",
        height: "100vh",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/sample">Sample</Link>
        </li>
        <li>
          <Link href="/post">Post</Link>
        </li>
        <li>
          <Link href="/post-data">Post Data</Link>
        </li>
        <li>
          <Link href="/zustand-sample">Zustand</Link>
        </li>
        <li>
          <Link href="/preview">Preview</Link>
        </li>
      </ul>
    </nav>
  );
}
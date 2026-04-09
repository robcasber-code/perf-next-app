// app/page.js
import NewsSSR from "../../components/NewsSSR";
import NewsClient from "../../components/NewsClient";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>SSR vs Client Fetch Demo</h1>
      <NewsSSR/>
      <NewsClient />
    </div>
  );
}
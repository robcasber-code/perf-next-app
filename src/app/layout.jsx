import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "My Next.js App",
  description: "A sample Next.js app with layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ display: "flex", minHeight: "100vh", margin: 0 }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
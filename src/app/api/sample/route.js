export async function GET() {
  try {
    const res = await fetch("https://type.fit/api/quotes", {
      headers: {
        "Accept": "application/json",
      },
      next: { revalidate: 2 }, // ISR: refresh every 60s
    });

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} from "../../services/postsData";

// GET
export async function GET() {
  const posts = await getAllPosts();
  return Response.json(posts);
}

// POST
export async function POST(req) {
  const body = await req.json();
  const post = await createPost(body);
  return Response.json({ message: "Created", post }, { status: 201 });
}

// PUT
export async function PUT(req) {
  const { id, ...data } = await req.json();
  const post = await updatePost(id, data);
  return Response.json({ message: "Updated", post });
}

// DELETE
export async function DELETE(req) {
  const { id } = await req.json();
  await deletePost(id);
  return Response.json({ message: "Deleted", id });
}
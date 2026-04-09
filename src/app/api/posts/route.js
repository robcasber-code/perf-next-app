import {
  getAllPosts,
  getPostById,
  createPost,
  bulkCreatePosts,
  updatePost,
  deletePost,
} from "../../services/posts";

export async function GET(req) {
  return Response.json(getAllPosts());
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { action, data } = body;

    switch (action) {
      case "create":
        const newPost = createPost(data);
        return Response.json({ message: "Post created", post: newPost }, { status: 201 });

      case "bulkCreate":
        const createdPosts = bulkCreatePosts(data);
        return Response.json({ message: "Bulk posts created", posts: createdPosts });

      default:
        return Response.json({ error: "Unknown action" }, { status: 400 });
    }
  } catch (error) {
    return Response.json({ error: "Failed to process request" }, { status: 500 });
  }
}

export async function PUT(req) {
  const { id, ...data } = await req.json();
  const updated = updatePost(id, data);
  if (!updated) return Response.json({ error: "Post not found" }, { status: 404 });

  return Response.json({ message: "Post updated", post: updated });
}

export async function DELETE(req) {
  const { id } = await req.json();
  const deleted = deletePost(id);
  if (!deleted) return Response.json({ error: "Post not found" }, { status: 404 });

  return Response.json({ message: "Post deleted", post: deleted });
}
import getPosts from "@/utils/db/getPost";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  let page = Number(searchParams.get("page")) || 1;

  const { posts, totalPosts, totalPages, error } = await getPosts(page);
  if (error) return NextResponse.error();

  return NextResponse.json({
    posts,
    totalPosts,
    totalPages,
  });
}

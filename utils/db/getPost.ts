import { supabase } from "@/supabase";

const getPosts = async (page: number) => {
  const rowsPerPage = 10;
  const offset = (page - 1) * rowsPerPage;

  const { data, error } = await supabase
    .from("Post")
    .select("*")
    .order("created_at", { ascending: false })
    .range(offset, offset + rowsPerPage - 1);

  const { count } = await supabase
    .from("Post")
    .select("*", { count: "exact", head: true });

  const [posts, totalPosts] = await Promise.all([data, count]);

  return {
    posts,
    totalPosts,
    totalPages: Math.ceil(Number(count || 1) / rowsPerPage),
    error,
  };
};

export default getPosts;

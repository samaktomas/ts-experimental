import useSWR, { preload } from "swr";
import { fetcher } from "../fetcher";

// const usePosts = (query: string, initData: any) => {
const usePosts = (query: string) => {
  const { data, error, isLoading } = useSWR(`/api/posts?${query}`, fetcher, {
    // fallbackData: initData,
    refreshInterval: 10000,
  });

  return {
    data,
    isLoading,
    isError: error,
  };
};

export default usePosts;

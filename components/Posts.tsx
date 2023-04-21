"use client";
import usePosts from "@/utils/hooks/usePosts";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Post from "./Post";
import { preload } from "swr";
import { fetcher } from "@/utils/fetcher";
import Loading from "../app/loading";

function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = usePosts(`page=${currentPage}`);

  if (data?.totalPages != currentPage)
    preload(`/api/posts?page=${currentPage + 1}`, fetcher);

  const itemsPerPage = 10;

  const itemsShowing = (totalPosts: string, currentPage: number) => {
    if (!totalPosts && !currentPage) return;
    const lastPageItems =
      Number(totalPosts) / (Number(currentPage) * itemsPerPage) >= 1
        ? itemsPerPage
        : Number(totalPosts) % ((Number(currentPage) - 1) * 10);
    return (Number(currentPage) - 1) * itemsPerPage + lastPageItems;
  };

  if (!data || isLoading) return <Loading />;

  return (
    <div>
      <div className="mt-5 flex items-center justify-between  bg-transparent px-4 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            disabled={!currentPage || currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            disabled={currentPage == data?.totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {(Number(currentPage) - 1) * 10 + 1}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {itemsShowing(data?.totalPosts, currentPage)}
              </span>{" "}
              of <span className="font-medium">{data?.totalPosts}</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md"
              aria-label="Pagination"
            >
              <button
                disabled={!currentPage || currentPage === 1}
                onClick={() => setCurrentPage(Number(currentPage) - 1)}
                className="relative inline-flex items-center rounded-full px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>

              {[...Array(data?.totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  aria-current="page"
                  className={
                    currentPage === i + 1
                      ? `relative z-10 inline-flex rounded-full items-center text-blue-500 px-4 py-2 text-xl font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500`
                      : "rounded-full relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  }
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={currentPage == data?.totalPages}
                onClick={() => {
                  setCurrentPage(Number(currentPage) + 1);
                }}
                className="relative inline-flex items-center rounded-full px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
      {data?.posts?.map((post: Post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;

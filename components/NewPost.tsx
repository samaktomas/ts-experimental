"use client";
import React, { useRef } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { supabase } from "../supabase";
import { mutate } from "swr";

function NewPost() {
  const { data: session } = useSession();
  const postRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!postRef?.current?.value) return;

    const { data, error } = await supabase
      .from("Post")
      .insert({ message: postRef?.current?.value, user: session?.user?.email })
      .select();

    if (data)
      // mutate(
      //   "/api/posts?page=1",
      //   ({ posts }: any) => {
      //     console.log("tosatosa", posts);
      //     return [data, ...posts];
      //   },
      //   true
      // );
      mutate("/api/posts?page=1");
    if (error) {
      alert(error.message);
    }
    postRef.current.value = "";
  };

  return (
    <>
      {session?.user && (
        <div className="max-w-4xl mx-auto p-5 pb-0">
          <div
            className="mx-auto bg-gray-100 rounded-xl border border-gray-300 
      py-5 shadow-md"
          >
            <p className="text-center">{session?.user?.name}</p>
            <form className="m-5 flex space-x-2" onSubmit={handleSubmit}>
              <Input
                clearable
                fullWidth
                bordered
                labelPlaceholder="Post"
                status="primary"
                ref={postRef}
                color="primary"
              />
              <button
                type="submit"
                className="rounded-xl text-blue-500 hover:text-blue-600 px-5 py-2 hover:bg-gray-200 transition"
              >
                Send
              </button>
              {/* <Button flat color="primary" auto>
                Send
              </Button> */}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default NewPost;

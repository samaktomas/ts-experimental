"use client";
import React from "react";
import {
  ChatBubbleBottomCenterIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import TimeAgo from "react-timeago";

type Props = {
  post: Post;
};
function Post({ post }: Props) {
  return (
    <div className="max-w-4xl mx-auto p-5 pb-0 last:pb-5">
      <div className="rounded-xl bg-gray-800 mx-auto flex flex-col shadow-lg">
        <div className="border-b border-b-slate-600 py-3 flex justify-between">
          <h2 className="text-white text-center px-5">Post ID: {post.id}</h2>
          <h2 className="text-white text-center px-5">{post.user}</h2>
          <h2 className="text-center px-5 italic text-sm text-gray-400">
            <TimeAgo date={new Date(post.created_at)} />
          </h2>
        </div>

        <div className="text-white flex ">
          <div className="relative w-24 h-24 rounded-md bg-white m-5 mr-0">
            <Image
              src={`https://avatars.dicebear.com/api/open-peeps/${
                Math.random().toString(36).substring(2, 7) || "placeholder"
              }.svg`}
              fill
              alt="avatar"
            />
          </div>
          <div className="p-5">{post.message}</div>
        </div>

        <div className="flex justify-evenly text-white border-t border-t-slate-600 py-2">
          <div
            className="flex space-x-2 items-center cursor-pointer rounded-md p-2 
          hover:bg-slate-700"
          >
            <ChatBubbleBottomCenterIcon className="h-5 w-5" />
            <p>Comment</p>
          </div>

          <div
            className="flex space-x-2 items-center cursor-pointer rounded-md p-2 
          hover:bg-slate-700"
          >
            <HandThumbUpIcon className="h-5 w-5" />
            <p>Like</p>
          </div>

          <div
            className="flex space-x-2 items-center cursor-pointer rounded-md p-2 
          hover:bg-slate-700"
          >
            <ShareIcon className="h-5 w-5" />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const { data: session } = useSession();
  const [userExpand, setUserExpand] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <header className="bg-gray-100/50 sticky top-0 z-50 backdrop-blur-sm shadow-md h-14">
      <div
        className="flex max-w-5xl mx-auto justify-between items-center 
      px-10 py-2"
      >
        <Bars3Icon className="sm:hidden h-6 w-6 cursor-pointer hover:opacity-60" />
        <div className="hidden sm:flex space-x-6 items-center text-sm">
          <Link
            href="/"
            className={`transition rounded-md hover:bg-gray-200 p-2 ${
              isActive("") && "text-blue-500"
            }`}
          >
            Main
          </Link>
          <Link
            href="/chat"
            className={`transition rounded-md hover:bg-gray-200 p-2 ${
              isActive("chat") && "text-blue-500"
            }`}
          >
            Chat
          </Link>
          <Link
            href="/explore"
            className={`transition rounded-md hover:bg-gray-200 p-2 ${
              isActive("explore") && "text-blue-500"
            }`}
          >
            Explore
          </Link>
          <Link
            href="/about"
            className={`transition rounded-md hover:bg-gray-200 p-2 ${
              isActive("about") && "text-blue-500"
            }`}
          >
            About
          </Link>
        </div>

        <div className="relative">
          {session ? (
            <div
              className="h-8 w-8 ring-2 ring-blue-500 cursor-pointer rounded-full"
              onClick={() => setUserExpand(!userExpand)}
            >
              <img
                className="object-fill rounded-full hover:scale-125 transition"
                src={session?.user?.image!}
                alt={session?.user?.name!}
              />
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="rounded-md text-white bg-blue-500 px-2 py-1 hover:opacity-70 transition"
            >
              <div className="flex items-center space-x-2">
                <UserCircleIcon className="h-5 w-5" />
                <span>Sign In</span>
              </div>
            </button>
          )}
          {userExpand && (
            <div className="z-99 absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  Your Profile
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  Settings
                </a>
              </div>
              <div
                onClick={() => signOut()}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
              >
                Sign out
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

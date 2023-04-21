import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div
      className="mx-auto flex py-10 px-10 items-center 
    justify-between border-t border-gray-200 bg-gray-900"
    >
      <div>
        <h2 className="text-xs text-gray-300 opacity-80 tracking-wide">
          © 2023 Tosa limited, Inc. All rights reserved.
        </h2>
      </div>
      <div className="space-x-2">
        <SocialIcon
          network="github"
          fgColor="gray"
          bgColor="transparent"
          className="opacity-60 hover:opacity-100 transition hover:cursor-pointer"
          url="https://github.com/samaktomas"
        />
        <SocialIcon
          network="linkedin"
          fgColor="gray"
          bgColor="transparent"
          className="opacity-60 hover:opacity-100 transition hover:cursor-pointer"
          url="https://bit.ly/2T766UC"
        />
        <SocialIcon
          network="facebook"
          fgColor="gray"
          bgColor="transparent"
          className="opacity-60 hover:opacity-100 transition hover:cursor-pointer"
          url="https://facebook.com/samaktomas"
        />
      </div>
    </div>
  );
}

export default Footer;

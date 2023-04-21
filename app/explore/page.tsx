import Carousel from "@/components/Carousel";
import React from "react";
import data from "../../utils/imgResponse.json";

async function Explore() {
  // LIMITED REQUESTS!!!!!
  //   const res = await fetch(
  //     `https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`
  //   );
  //   const data = await res.json();

  const imgArr = data
    .map((img: any) => ({
      id: img.id,
      url: img.urls.full,
    }))
    .slice(0, 10);

  return (
    <div className="h-[calc(100vh-56px)] w-100% flex bg-">
      <div className="my-10 px-5 md:px-20 mx-auto max-w-7xl">
        <Carousel images={imgArr} />
      </div>
    </div>
  );
}

export default Explore;

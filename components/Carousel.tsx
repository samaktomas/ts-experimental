"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../app/explore/styles.css";

type Props = {
  images: {
    id: string;
    url: string;
  }[];
};

function Carousel({ images }: Props) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images?.map((item) => (
          <SwiperSlide key={item.id} className="relative">
            <img src={item.url} alt="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;

import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

export default function Home() {
  SwiperCore.use([Navigation]);
  const images = [
    "https://images.pexels.com/photos/1200637/pexels-photo-1200637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2062324/pexels-photo-2062324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div>
      <div className="flex flex-col gap-6 p-3 py-28 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Crafting <span className="text-slate-500">stories,</span>
          <br />
          one strand at a time
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          WaeveWhisper is not just an online clothing store..
          <br />
          it's an immersive journey into the world of fashion where every
          garment tells a story.
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's explore...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {images.map((item) => (
          <SwiperSlide>
            <div
              style={{
                background: `url(${item}) center no-repeat`,
                backgroundSize: "cover",
              }}
              className="h-[500px] grayscale"
              key={item}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";

const data = [
  "/images/Indian_Food_Cover.jpg",
  "/images/images-curry-rice.jpeg",
  "/images/images-pizza.jpg",
];

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-82px)]">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        navigation={true}
        speed={500}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {data.map((url, i) => (
          <SwiperSlide key={i + url}>
            <div className="w-full h-full relative">
              <Image
                src={url}
                alt="food"
                fill
                priority
                className="w-full h-full object-cover"
              />
              <div className="absolute z-[1] top-0 left-0 right-0 bottom-0 w-full h-full bg-black/20"></div>
              <div className="absolute z-[2] top-0 left-0 right-0 bottom-0 w-full h-full container mx-auto text-center flex flex-col gap-5 items-center justify-center text-orange-50 md:p-20">
                <h1 className="text-5xl md:text-7xl font-bold">
                  Welcome to the Culinary Haven. <br /> Here anything you want
                  to eat is just a few clicks away.
                </h1>
                <p className="md:text-xl">
                  Food ordering has never been easier. Just follow the simple
                  steps and within minutes get yourself a warm and hearty meal
                  in your doorstep. we have got all the food you can think of
                  whether is breakfast, lunch or dinner.
                </p>
                <Link href="/#get_started">
                  <Button size="lg" className="md:text-xl bg-orange-500">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;

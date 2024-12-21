"use client";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import ProductWindow from "../ProductWindow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Banner = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        direction: "ltr",
        slidesToScroll: 1,
        containScroll: false,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
        }),
      ]}
      className="mt-8"
    >
      <CarouselContent>
        <CarouselItem>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Welcome to Luna
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
                culpa excepturi hic doloribus architecto officia alias, pariatur
                quos, voluptates asperiores blanditiis magnam? Ut soluta
                laboriosam tempora qui inventore dicta animi.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Best Sellers
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
                culpa excepturi hic doloribus architecto officia alias, pariatur
                quos, voluptates asperiores blanditiis magnam? Ut soluta
                laboriosam tempora qui inventore dicta animi.
              </p>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Back in stock
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
                culpa excepturi hic doloribus architecto officia alias, pariatur
                quos, voluptates asperiores blanditiis magnam? Ut soluta
                laboriosam tempora qui inventore dicta animi.
              </p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;

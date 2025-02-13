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
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
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
          delay: 3500,
          stopOnInteraction: false,
        }),
      ]}
      className="mt-8 "
    >
      <CarouselContent>
        <CarouselItem>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Welcome to Luna
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Bringing Nepal's timeless elegance to Japan. Each piece in our
                collection carries the warmth of Nepalese craftsmanship and the
                stories of our heritage. Discover the perfect blend of tradition
                and grace, carefully curated to make you feel beautiful and
                connected to our rich cultural tapestry.
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
                Discover our most cherished pieces that have captured hearts
                across Japan. From intricately woven pashminas to stunning
                traditional wear, these favorites blend Nepalese artistry with
                contemporary style. Each piece tells a story of heritage and
                craftsmanship that our customers have fallen in love with.
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
                We're excited to announce that several of our beloved items
              </p>
              <Button
                onClick={() => router.push("/search?heading=BackInStore")}
              >
                Shop Now
              </Button>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;

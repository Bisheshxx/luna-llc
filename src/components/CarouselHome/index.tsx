"use client";
import React from "react";
import ProductWindow from "../ProductWindow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Product } from "@/types";

interface IProps {
  children: React.ReactElement;
}
const HomeCarousel = ({ children }: IProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: "auto",
        direction: "ltr",
        dragFree: true,
      }}
      className="mt-8"
    >
      {children}
      {/* <CarouselNext />
      <CarouselPrevious /> */}
    </Carousel>
  );
};

export default HomeCarousel;

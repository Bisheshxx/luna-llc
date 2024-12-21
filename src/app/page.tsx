import { categories, products } from "@/StaticData";
import Banner from "@/components/Banner";
import HomeCarousel from "@/components/CarouselHome";
import ProductWindow from "@/components/ProductWindow";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/types";

import {
  Facebook,
  Instagram,
  LocateIcon,
  Phone,
  Power,
  Rocket,
  Shield,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-24 bg-gray-100 dark:bg-gray-800">
          <Banner />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex justify-between items-end">
              <h2 className="text-3xl font-bold tracking-tighter  sm:text-4xl md:text-5xl">
                {`Categories`}
              </h2>
              <span className="cursor-pointer">View More</span>
            </div>
            <HomeCarousel>
              <CarouselContent>
                {categories && categories.length > 1 ? (
                  categories.map((category, index) => (
                    <CarouselItem
                      className={`md:basis-1/4 basis-1/2`}
                      key={index}
                    >
                      <ProductWindow
                        title={category.name}
                        image={category.images}
                      />
                    </CarouselItem>
                  ))
                ) : (
                  <>No Data</>
                )}
              </CarouselContent>
            </HomeCarousel>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex justify-between items-end">
              <h2 className="text-3xl font-bold tracking-tighter  sm:text-4xl md:text-5xl">
                {`What's New`}
              </h2>
              <span className="cursor-pointer">View More</span>
            </div>
            <HomeCarousel>
              <CarouselContent>
                {products.length > 0 ? (
                  products.map((product: Product) => (
                    <CarouselItem
                      className={`md:basis-1/4 basis-1/2`}
                      key={product.id}
                    >
                      <ProductWindow
                        title={product.name}
                        price={product.price}
                      />
                    </CarouselItem>
                  ))
                ) : (
                  <>No Items</>
                )}
              </CarouselContent>
            </HomeCarousel>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 mx-auto">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 mx-auto">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                About Us
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                recusandae consectetur ea animi in nisi porro esse sit fugit
                odit voluptates omnis incidunt molestiae? Dolor nulla magnam rem
                aliquam alias.
              </p>
            </div>
          </div>
        </section>
        <footer className="w-full py-4 md:py-8 lg:py-12 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex justify-between items-end">
              <h2 className="text-3xl font-bold tracking-tighter  sm:text-4xl md:text-5xl">
                Contact us
              </h2>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex gap-4">
                  <Instagram /> LunaIG
                </div>
                <div className="flex gap-4">
                  <Facebook /> LunaFB
                </div>
              </div>
              <div>
                <div className="flex gap-4">
                  <Phone /> LunaPhone
                </div>
                <div className="flex gap-4">
                  <LocateIcon /> Location
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

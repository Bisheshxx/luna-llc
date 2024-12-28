"use client";
import { categories } from "@/StaticData";
import Banner from "@/components/Banner";
import HomeCarousel from "@/components/CarouselHome";
import ProductWindow from "@/components/ProductWindow";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useStore from "@/store";
import { Product } from "@/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const { productStore } = useStore();
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <main>
        <section className="w-full py-24 bg-green">
          <Banner />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex justify-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex justify-center">
                {`Categories`}
              </h2>
            </div>
            <div className="flex mt-24 justify-evenly">
              {categories && categories.length > 1 ? (
                categories.map((category, index) => (
                  <div key={index}>
                    <div
                      className={`basis-1/3 flex justify-center transition duration-500 hover:scale-125`}
                    >
                      <Image
                        src={category.images as StaticImport}
                        alt={category.name}
                        className="rounded-full bg-black h-24 w-24 md:h-[400px] md:w-[400px]"
                        style={{
                          // height: "400px",
                          // width: "400px",
                          objectFit: "cover",
                        }}
                        height={200}
                        width={200}
                      />
                    </div>
                    <div className="flex justify-center text-sm md:text-2xl mt-10">
                      {category.name}
                    </div>
                  </div>
                ))
              ) : (
                <>No Data</>
              )}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex justify-between items-end">
              <h2 className="text-3xl font-bold tracking-tighter  sm:text-4xl md:text-5xl">
                {`Our Products`}
              </h2>
              <span className="cursor-pointer">View More</span>
            </div>
            <HomeCarousel>
              <CarouselContent>
                {productStore.length > 0 ? (
                  productStore.map((product: Product, index: number) => (
                    <CarouselItem
                      className={`md:basis-1/4 basis-1/2`}
                      key={index}
                      onClick={() => router.push(`/product/${index}`)}
                    >
                      <ProductWindow
                        title={product.name}
                        price={product.price}
                        image={product.image}
                        button="Add to Cart"
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
      </main>
    </div>
  );
}

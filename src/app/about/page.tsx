import { StaticDataSEO } from "@/StaticData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/LunaStore.jpg";

const About = () => {
  return (
    <div className="flex-1 mx-auto">
      <section className="w-full py-8 md:py-12 lg:py-24">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 mx-auto">
          <div className="flex justify-center">
            <Image src={Logo} width={500} height={500} alt="Store Image" />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              About Luna
            </div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              {StaticDataSEO[0].heading}
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {StaticDataSEO[0].content}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

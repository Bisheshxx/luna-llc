import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/logo.png";

const About = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-8 md:py-12 lg:py-24">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 mx-auto">
          <div className="flex justify-center">
            <Image src={Logo} alt="Logo" height={150} width={150} />
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              About Luna
            </div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Lorem ipsum dolor sit amet consectetur,
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              et impedit doloremque repellendus totam! Autem vel error ut sit
              accusamus sunt repellendus impedit magni. Sunt quod exercitationem
              similique temporibus veniam!
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 md:gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="inline-block rounded-lg bg-muted py-1 text-sm">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Lorem ipsum dolor sit amet consectetur,
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                fugiat corporis harum, expedita amet, eius quas aperiam aut
                provident sapiente vero ipsum. Nostrum nesciunt animi totam amet
                earum, hic alias!
              </p>
            </div>
            <div>
              <div className="inline-block rounded-lg bg-muted py-1 text-sm">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Lorem ipsum dolor sit amet consectetur,
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores cumque maiores nobis aut molestiae possimus ducimus
                at. Id necessitatibus blanditiis quo nesciunt animi fugit ex
                facilis esse, est quod tenetur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import {
  Instagram,
  Facebook,
  Phone,
  LocateIcon,
  InstagramIcon,
  FacebookIcon,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 md:py-8 lg:py-12 bg-gray-100 dark:bg-gray-800 ">
      <div className="grid md:grid-cols-3 container mx-auto justify-items-center md:justify-items-start">
        <div className="col-span-2">
          <h2 className="text-3xl tracking-tighter  sm:text-4xl md:text-5xl">
            LUNA
          </h2>
        </div>

        <div className="grid md:grid-cols-2  md:justify-self-end grid-cols-1  gap-24  ">
          <div className="flex flex-col">
            <h1>Office location:</h1>
            <div className="flex flex-col">
              <p>181-3320</p>
              <p>Fuchu city</p>
              <p>Honjukucho 2-8-10</p>
              <p>Honjuku mansion 101</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Contact Us</h1>
            <div className="flex flex-col gap-1">
              <a
                href="https://www.instagram.com/luna_ethnics/"
                target="_blank"
                className="flex gap-2 cursor-pointer items-center"
              >
                <InstagramIcon size={20} /> @luna_ethnics
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61564249811897"
                target="_blank"
                className="flex gap-2 cursor-pointer items-center"
              >
                <FacebookIcon size={20} /> @luna_ethnics
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

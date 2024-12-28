import { Instagram, Facebook, Phone, LocateIcon } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;

import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

interface IProps {
  title: string;
  price?: number; // Use lowercase `number` for TypeScript.
  image?: string;
  button?: string;
}

const ProductWindow = ({ title, price, image, button }: IProps) => {
  return (
    <div>
      <Card>
        <CardContent className="flex flex-col items-center text-center gap-4 p-8">
          {/* Image Section */}
          {image ? (
            <div className="relative md:h-80 md:w-64 w-36 h-48">
              <Image
                src={image}
                alt={`${title} image`}
                className="rounded-md"
                fill
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          ) : (
            <div className="md:h-80 md:w-64 h-12 w-8 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}

          {/* Title */}
          <h3 className="md:text-xl text-sm font-bold">{title}</h3>

          {/* Price */}
          {price && (
            <p className="text-gray-500 dark:text-gray-400">
              ${price.toFixed(2)}
            </p>
          )}

          {/* Button */}
          {button && (
            <Button size="lg" className="mt-4">
              {button}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductWindow;

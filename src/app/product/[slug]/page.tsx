"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import useStore from "@/store";
import { Cart, Product, Size } from "@/types";
import { useToast } from "@/hooks/use-toast";

const ProductsPage = () => {
  const params = useParams();
  const { productStore, addToCart } = useStore();
  const product: Product = productStore[Number(params.slug)];
  const { toast } = useToast();

  const [cartItem, setCartItem] = useState<Cart>({
    id: Number(params.slug),
    quantity: 1,
    size: "S",
    price: product.price,
  });
  const handleChange = (value: string) => {
    setCartItem({ ...cartItem, quantity: Number(value) });
  };
  const addToCartButton = () => {
    addToCart({ ...cartItem });
    toast({
      title: "Added to Cart",
    });
  };
  return (
    <div className="grid md:grid-cols-2 items-start max-w-3xl px-4 mx-auto py-6 gap-6 md:gap-12 flex-1">
      <div className="grid gap-4 md:gap-10">
        <Image
          src={product.image}
          alt="Product Image"
          width={600}
          height={600}
          className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
        />
      </div>
      <div className="grid gap-4 items-start">
        <div className="flex items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-2xl sm:text-3xl">{product.name}</h1>
            <div>{/* <p>{product.description}</p> */}</div>
          </div>
          <div className="text-4xl font-bold ml-auto">¥{product.price}</div>
        </div>
        <div className="grid gap-4 md:gap-10">
          <div className="grid gap-2">
            <Label htmlFor="size" className="text-base">
              Size
            </Label>

            <RadioGroup
              id="testing"
              defaultValue="S"
              className="flex items-center gap-2"
              onValueChange={(value: Size) =>
                setCartItem({ ...cartItem, size: value })
              }
            >
              <Label
                htmlFor="size-s"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
              >
                <RadioGroupItem id="size-s" value="S" />S
              </Label>
              <Label
                htmlFor="size-m"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
              >
                <RadioGroupItem id="size-m" value="M" />M
              </Label>
              <Label
                htmlFor="size-l"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
              >
                <RadioGroupItem id="size-l" value="L" />L
              </Label>
              <Label
                htmlFor="size-xl"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
              >
                <RadioGroupItem id="size-xl" value="XL" />
                XL
              </Label>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="quantity" className="text-base">
              Quantity
            </Label>
            <Select
              defaultValue="1"
              value={cartItem.quantity.toString()}
              onValueChange={handleChange}
            >
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="6">5</SelectItem>
                <SelectItem value="7">6</SelectItem>
                <SelectItem value="8">7</SelectItem>
                <SelectItem value="9">8</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button size="lg" onClick={addToCartButton}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

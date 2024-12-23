"use client";
import { Product } from "@/types";
import { Separator } from "@radix-ui/react-separator";
import { ArrowDown, ArrowUp, Minus, Plus, XIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { cart } from "@/StaticData";
import Image from "next/image";

interface IProps {
  isCartOpen: boolean;
  toggleCart: () => void;
}

const CartComponent = ({ isCartOpen, toggleCart }: IProps) => {
  //   const [cart, setCart] = useState([
  //     {
  //       id: 1,
  //       name: "Acme Circles T-Shirt",
  //       image: "/placeholder.svg",
  //       quantity: 2,
  //       price: 29.99,
  //     },
  //     {
  //       id: 2,
  //       name: "Autumn Mug",
  //       image: "/placeholder.svg",
  //       quantity: 1,
  //       price: 12.99,
  //     },
  //     {
  //       id: 3,
  //       name: "Fall Fragrance Candle",
  //       image: "/placeholder.svg",
  //       quantity: 3,
  //       price: 16.99,
  //     },
  //   ])

  return (
    <div
      className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background p-6 shadow-lg transition-transform duration-300 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <Button variant="ghost" size="icon" onClick={toggleCart}>
          <XIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <Image
              src={item.image}
              alt={item.name}
              width={64}
              height={64}
              className="rounded-md"
              style={{ aspectRatio: "64/64", objectFit: "cover" }}
            />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="flex gap-2 items-center">
                  Qty: <Plus size={14} className="cursor-pointer" />
                  {item.quantity}
                  <Minus size={14} className="cursor-pointer" />
                </span>
                <Separator orientation="vertical" className="h-4" />
                <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t pt-4 flex items-center justify-between">
        <span className="text-muted-foreground">Total:</span>
        <span className="font-medium">$2</span>
      </div>
      <div className="flex justify-center items-center">
        <Button> Proceed to Check Out</Button>
      </div>
    </div>
  );
};

export default CartComponent;

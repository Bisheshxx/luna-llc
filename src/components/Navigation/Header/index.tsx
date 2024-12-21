"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
  GoogleOneTap,
} from "@clerk/nextjs";
import { MoonStar, Mountain, ShoppingCart, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Acme Circles T-Shirt",
      image: "/placeholder.svg",
      quantity: 2,
      price: 29.99,
    },
    {
      id: 2,
      name: "Autumn Mug",
      image: "/placeholder.svg",
      quantity: 1,
      price: 12.99,
    },
    {
      id: 3,
      name: "Fall Fragrance Candle",
      image: "/placeholder.svg",
      quantity: 3,
      price: 16.99,
    },
  ]);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <header className="h-20 flex items-center px-6">
        <Link
          href="/"
          className="flex items-center justify-center"
          prefetch={false}
        >
          {/* <Mountain className="h-6 w-6" /> */}
          <span className="text-2xl">L</span>
          <MoonStar className="h-6 w-6" />
          <span className="text-2xl">na</span>
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-8 items-center">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/search"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Collection
          </Link>
          <Link
            href="/search"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>

          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            <ShoppingCart onClick={toggleCart} className="h-5 w-5 mr-2" />
          </Link>
        </nav>
      </header>
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
              <img
                src="/placeholder.svg"
                alt={item.name}
                width={64}
                height={64}
                className="rounded-md"
                style={{ aspectRatio: "64/64", objectFit: "cover" }}
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>Qty: {item.quantity}</span>
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
      </div>
    </>
  );
};

export default NavBar;

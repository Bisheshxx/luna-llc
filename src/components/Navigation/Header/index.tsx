"use client";
import CartComponent from "@/components/Cart";
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
      <CartComponent isCartOpen={isCartOpen} toggleCart={toggleCart} />
    </>
  );
};

export default NavBar;

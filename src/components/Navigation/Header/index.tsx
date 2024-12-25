"use client";
import CartComponent from "@/components/Cart";
import { Input } from "@/components/ui/input";
import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
  GoogleOneTap,
} from "@clerk/nextjs";
import {
  HamIcon,
  Menu,
  MoonStar,
  Mountain,
  SearchIcon,
  ShoppingCart,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import React, { ChangeEventHandler, useEffect, useState } from "react";
// import Logo from "@/public/logo.png";
import Logo from "../../../../public/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Get the value of the input field
      router.push(`/search/${inputValue}`);
      // Example of using the value
      // router.push("/search?query=" + (e.target as HTMLInputElement).value);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Handle input change
  };

  // const search = (e: ChangeEventHandler<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     const inputValue = (e.target as HTMLInputElement).value;
  //     // console.log(inputValue);
  //     router.push("/search/inputValue");
  //   }
  // };

  useEffect(() => {
    setIsCartOpen(false);
    setIsMenuOpen(false);
  }, [pathname]);
  return (
    <>
      <header className="h-20 grid md:grid-cols-3 grid-cols-2 ">
        <Link href="/" className="flex items-center px-8" prefetch={false}>
          <Image src={Logo} alt="Logo" height={100} width={100} />
        </Link>

        <div className="md:flex items-center justify-center hidden ">
          <div className="flex items-center w-full max-w-sm space-x-2  px-3.5 py-2">
            <SearchIcon className="h-4 w-4" />
            <Input
              type="search"
              placeholder="Search"
              className="w-full border-0 h-8 font-semibold"
              onChange={handleChange}
              onKeyDown={search}
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 px-4 md:hidden">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ShoppingCart onClick={toggleCart} className="h-5 w-5 mr-2" />

          <Menu className="h-5 w-5 mr-2" onClick={toggleMenu} />
        </div>
        <nav className="hidden md:flex gap-8 items-center justify-end px-8">
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
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background p-6 shadow-lg transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center w-full max-w-sm space-x-2  px-3.5 py-2">
            <SearchIcon className="h-4 w-4" />
            <Input
              type="search"
              placeholder="Search"
              className="w-full border-0 h-8 font-semibold"
              onChange={handleChange}
              onKeyDown={search}
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(false)}
          >
            <XIcon className="h-5 w-5" />
          </Button>
        </div>
        <nav className="flex flex-col gap-8">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          <SignedOut>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              <SignInButton mode="modal" />
            </Link>
          </SignedOut>
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
        </nav>
      </div>
    </>
  );
};

export default NavBar;

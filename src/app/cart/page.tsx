"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { HeartIcon, RefreshCcw, TrashIcon } from "lucide-react";
import Image from "next/image";
import useStore from "@/store";
import { Cart, Product } from "@/types";

export default function CartPage() {
  const {
    cartStore,
    productStore,
    removeFromCart,
  }: {
    cartStore: Cart[];
    productStore: Product[];
    removeFromCart: (id: number) => void;
  } = useStore();
  return (
    <div className="grid max-w-3xl gap-4 px-4 mx-auto flex-1">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Shopping Cart</h1>
        <Button size="icon" variant="outline" className="rounded-full">
          <RefreshCcw className="w-4 h-4" />
          <span className="sr-only">Refresh</span>
        </Button>
      </div>
      <div className="grid gap-4">
        {cartStore.length > 0 ? (
          cartStore.map((cart: Cart) => (
            <Card
              key={cart.id}
              className="grid gap-4 p-4 md:grid-cols-3 md:gap-4"
            >
              <div className="flex gap-4 md:col-span-3 items-center">
                <Image
                  src={productStore[cart.id].image}
                  alt="Product image"
                  width={200}
                  height={200}
                  className="aspect-square object-cover border border-gray-200 rounded-lg w-full md:max-h-[200px] overflow-hidden dark:border-gray-800"
                />
                <div className=" gap-1.5">
                  <Link
                    href={`/product/${productStore[cart.id].id}`}
                    className="line-clamp-2 font-medium hover:underline"
                    prefetch={false}
                  >
                    {productStore[cart.id].name}
                  </Link>
                  <div className="text-sm font-medium">Size: {cart.size}</div>
                  <div className="text-sm font-medium">
                    {" "}
                    Quantity{cart.quantity}
                  </div>
                  <div className="text-sm font-medium">
                    Price : ${productStore[cart.id].price}
                  </div>
                  {/* <Button variant="ghost" size="icon">
                    <TrashIcon className="w-4 h-4" />
                    <span className="sr-only">Delete</span>
                  </Button> */}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-1.5">
                <div className="flex items-center gap-1">
                  <div className="w-20 md:w-24 sm:hidden" />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(cart.id)}
                  >
                    <TrashIcon className="w-4 h-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="w-full h-80 flex justify-center items-center">
            No Item
          </div>
        )}
        {cartStore.length > 0 && (
          <>
            <Card className="p-4">
              <div className="grid gap-2 md:grid-cols-2">
                <div className="flex items-center justify-between font-medium">
                  <div>Total</div>
                  <div>
                    {" "}
                    ¥{" "}
                    {cartStore.reduce(
                      (sum: number, item: Cart) =>
                        sum + item.price * item.quantity,
                      0
                    )}
                  </div>
                </div>
              </div>
            </Card>
            <Button size="lg" className="w-full">
              Proceed to checkout
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

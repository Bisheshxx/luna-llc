"use client";
import { Cart, Product } from "@/types";
import { Separator } from "@radix-ui/react-separator";
import { ArrowDown, ArrowUp, Minus, Plus, Trash, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import useStore from "@/store";
import Link from "next/link";

interface IProps {
  isCartOpen: boolean;
  toggleCart: () => void;
}

const CartComponent = ({ isCartOpen, toggleCart }: IProps) => {
  const { cartStore, productStore, removeFromCart } = useStore();
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
      {cartStore.length > 0 ? (
        <>
          {" "}
          <div className="space-y-4">
            {cartStore.map((cart: Cart) => (
              <div key={cart.id} className="flex items-center gap-4">
                <div>
                  <Image
                    src={productStore[cart.id].image}
                    alt={productStore[cart.id].name}
                    width={64}
                    height={64}
                    className="rounded-md"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{productStore[cart.id].name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="flex gap-2 items-center">
                      Qty: {cart.quantity}
                    </span>
                    <Separator orientation="vertical" className="h-4" />
                    <span>
                      Total: ¥
                      {(productStore[cart.id].price * cart.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <Trash onClick={() => removeFromCart(cart.id)} />
              </div>
            ))}
          </div>
          <div className="mt-6 border-t pt-4 flex items-center justify-between">
            <span className="text-muted-foreground">Total:</span>
            <span className="font-medium">
              ¥{" "}
              {cartStore.reduce(
                (sum: number, item: Cart) => sum + item.price * item.quantity,
                0
              )}
            </span>
          </div>
          <div className="flex justify-center items-center">
            <Link href={"/cart"}> Proceed to Check Out</Link>
          </div>
        </>
      ) : (
        <div className="h-80 w-full flex items-center justify-center">
          Cart is Empty
        </div>
      )}
    </div>
  );
};

export default CartComponent;

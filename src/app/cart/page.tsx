/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MFe3XmdE00X
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { HeartIcon, RefreshCcw, TrashIcon } from "lucide-react";
import Image from "next/image";

export default function CartPage() {
  return (
    <div className="grid max-w-3xl gap-4 px-4 mx-auto">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Shopping Cart</h1>
        <Button size="icon" variant="outline" className="rounded-full">
          <RefreshCcw className="w-4 h-4" />
          <span className="sr-only">Refresh</span>
        </Button>
      </div>
      <div className="grid gap-4">
        <Card className="grid gap-4 p-4 md:grid-cols-3 md:gap-4">
          <div className="flex items-center gap-4 md:col-span-2">
            <Image
              src="/placeholder.svg"
              alt="Product image"
              width={200}
              height={200}
              className="aspect-square object-cover border border-gray-200 rounded-lg w-full md:max-h-[200px] overflow-hidden dark:border-gray-800"
            />
            <div className="grid gap-1.5">
              <Link
                href="#"
                className="line-clamp-2 font-medium hover:underline"
                prefetch={false}
              >
                WhimsiMug: Sip in Style and Magic
              </Link>
              <div className="text-sm font-medium">SKU: 938-28743-1</div>
              <Button size="icon" variant="outline">
                <HeartIcon className="w-4 h-4" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1.5">
            <div className="text-2xl font-semibold">$99.00</div>
            <div className="flex items-center gap-1">
              <div>Color: Blue</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-20 md:w-24" />
              <Button size="sm">Update</Button>
              <Button variant="ghost" size="icon">
                <TrashIcon className="w-4 h-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="grid gap-2 md:grid-cols-2">
            <div className="flex items-center justify-between">
              <div>Subtotal</div>
              <div>$99.00</div>
            </div>
            <div className="flex items-center justify-between">
              <div>Shipping</div>
              <div>$10.00</div>
            </div>
            <div className="flex items-center justify-between">
              <div>Tax</div>
              <div>$10.90</div>
            </div>
            <Separator className="w-full" />
            <div className="flex items-center justify-between font-medium">
              <div>Total</div>
              <div>$119.90</div>
            </div>
          </div>
        </Card>
        <Button size="lg" className="w-full">
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
}

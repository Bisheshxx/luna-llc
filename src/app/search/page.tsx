"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Product } from "@/types";
import { ArrowUp, Star } from "lucide-react";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import useStore from "@/store";

export default function Search() {
  const searchParams = useSearchParams();
  const term = searchParams.get("term");
  const heading = searchParams.get("heading");
  const [filters, setFilters] = useState<any>({
    brand: [],
    category: [],
    priceRange: [0, 100],
    minPrice: 0,
    maxPrice: 100,
    rating: 0,
  });
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState<string>(term || "");

  const { productStore } = useStore();
  // const filteredProducts = useMemo(() => {
  //   return products.filter((product: Product) => {
  //     if (
  //       filters.category.length > 0 &&
  //       !filters.category.includes(product.category)
  //     ) {
  //       return false;
  //     }
  //     if (
  //       product.price < filters.minPrice ||
  //       product.price > filters.maxPrice
  //     ) {
  //       return false;
  //     }
  //     if (
  //       searchTerm.length > 0 &&
  //       !product.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     ) {
  //       return false;
  //     }
  //     return true;
  //   });
  // }, [filters, sortOrder, searchTerm]);
  const handleFilterChange = (type: any, value: any) => {
    setFilters((prevFilters: any) => {
      if (type === "brand") {
        return {
          ...prevFilters,
          brand: prevFilters.brand.includes(value)
            ? prevFilters.brand.filter((item: any) => item !== value)
            : [...prevFilters.brand, value],
        };
      } else if (type === "category") {
        return {
          ...prevFilters,
          category: prevFilters.category.includes(value)
            ? prevFilters.category.filter((item: any) => item !== value)
            : [...prevFilters.category, value],
        };
      } else if (type === "priceRange") {
        return {
          ...prevFilters,
          priceRange: value,
          minPrice: value[0],
          maxPrice: value[1],
        };
      } else if (type === "minPrice") {
        return {
          ...prevFilters,
          minPrice: value,
          priceRange: [value, prevFilters.maxPrice],
        };
      } else if (type === "maxPrice") {
        return {
          ...prevFilters,
          maxPrice: value,
          priceRange: [prevFilters.minPrice, value],
        };
      } else if (type === "rating") {
        return {
          ...prevFilters,
          rating: value,
        };
      }
      return prevFilters;
    });
  };
  const handleSortChange = (order: any) => {
    setSortOrder(order);
  };
  const handleSearch = (term: any) => {
    setSearchTerm(term);
  };
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 flex-1">
      <h1 className="text-2xl my-10 font-bold">
        {heading ? heading : "Search Results"}
      </h1>
      <div className="grid md:grid-cols-[250px_1fr] gap-8">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="category" className="mb-2 block">
                    Category
                  </Label>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox
                        id="category-electronics"
                        checked={filters.category.includes("Electronics")}
                        onCheckedChange={() =>
                          handleFilterChange("category", "Electronics")
                        }
                      />
                      Kurtha
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox
                        id="category-sports"
                        checked={filters.category.includes("Sports")}
                        onCheckedChange={() =>
                          handleFilterChange("category", "Sports")
                        }
                      />
                      Saree
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox
                        id="category-home"
                        checked={filters.category.includes("Home")}
                        onCheckedChange={() =>
                          handleFilterChange("category", "Home")
                        }
                      />
                      Accessories
                    </Label>
                  </div>
                </div>
                <div>
                  <Label htmlFor="price-range" className="mb-2 block">
                    Price Range
                  </Label>
                  <div className="flex items-center gap-4">
                    <div />
                    <div className="grid gap-2">
                      <Input
                        type="number"
                        id="min-price"
                        value={filters.minPrice}
                        onChange={(e) =>
                          handleFilterChange("minPrice", Number(e.target.value))
                        }
                        className="w-24"
                      />
                      <Input
                        type="number"
                        id="max-price"
                        value={filters.maxPrice}
                        onChange={(e) =>
                          handleFilterChange("maxPrice", Number(e.target.value))
                        }
                        className="w-24"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline">Apply</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="bg-white"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="shrink-0">
                  <ArrowUp className="w-4 h-4 mr-2" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]" align="end">
                <DropdownMenuRadioGroup
                  value={sortOrder}
                  onValueChange={handleSortChange}
                >
                  <DropdownMenuRadioItem value="asc">
                    Price: Low to High
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="desc">
                    Price: High to Low
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productStore.map((product: Product) => (
              <Card className="relative group" key={product.id}>
                <Link
                  href={`/product/${product.id}`}
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">{product.name}</span>
                </Link>
                <CardContent>
                  <Image
                    src={product.image}
                    alt={"example"}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity my-5"
                  />
                  <div className="flex-1 py-4">
                    <h3 className="font-semibold tracking-tight">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">
                        {product.category}
                      </span>
                    </div>
                    <h4 className="font-semibold">${product.price}</h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

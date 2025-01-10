"use client";

import { useState, useEffect } from "react";
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
import { useSearchParams } from "next/navigation";
import useStore from "@/store";

export default function Search() {
  const searchParams = useSearchParams();
  const term = searchParams.get("term");
  const heading = searchParams.get("heading");
  const category = searchParams.get("category");
  const { productStore } = useStore();
  const [filters, setFilters] = useState<any>({
    category: [],
    priceRange: [0, 100],
  });
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState<string>(term || "");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const items =
      heading === "BackInStore"
        ? productStore.filter((product: Product) => product.tag === "BIS")
        : productStore.filter((product: Product) => product.tag !== "BIS");
    setProducts(items);
  }, [heading, productStore]);

  useEffect(() => {
    if (category) {
      setFilters({
        ...filters,
        category: [...filters.category, category],
      });
    }
  }, [category]);

  const filteredProducts = products
    .filter((product: Product) => {
      // Category filter
      if (
        filters.category.length > 0 &&
        !filters.category.includes(product.category)
      ) {
        console.log(filters.category);
        return false;
      }
      // Price range filter
      if (
        product.price < filters.minPrice ||
        product.price > filters.maxPrice
      ) {
        return false;
      }
      // Search term filter
      if (
        searchTerm.length > 0 &&
        !product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }
      return true;
    })
    .sort((a: Product, b: Product) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });

  const handleFilterChange = (type: string, value: any) => {
    setFilters((prevFilters: any) => {
      if (type === "category") {
        const updatedCategories = prevFilters.category.includes(value)
          ? prevFilters.category.filter((cat: string) => cat !== value)
          : [...prevFilters.category, value];
        return { ...prevFilters, category: updatedCategories };
      } else {
        return { ...prevFilters, [type]: value };
      }
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
                        id="category-Kurtha"
                        checked={filters.category.includes("Kurtha")}
                        onCheckedChange={() =>
                          handleFilterChange("category", "Kurtha")
                        }
                      />
                      Kurtha
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox
                        id="category-Saree"
                        checked={filters.category.includes("Saree")}
                        onCheckedChange={() =>
                          handleFilterChange("category", "Saree")
                        }
                      />
                      Saree
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox
                        id="category-Lehenga"
                        checked={filters.category.includes("Lehenga")}
                        onCheckedChange={() =>
                          handleFilterChange("category", "Lehenga")
                        }
                      />
                      Lehenga
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
          </Card>
        </div>
        <div className="grid gap-6">
          <div className="flex gap-4">
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
            {filteredProducts.length > 0 &&
              filteredProducts.map((product: Product) => (
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
            {/* <PaginationComponent /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

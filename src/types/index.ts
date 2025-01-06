import { StaticImageData } from "next/image";

export interface Product {
  category: string;
  price: number;
  name: string;
  id: string;
  description: string;
  image: string | StaticImageData;
  tag?: string;
}

export interface Filters {
  brand: string[];
  category: string[];
  minPrice: number;
  maxPrice: number;
  rating: number;
}
export interface Categories {
  name: string;
  images?: string | StaticImageData;
}

export interface Cart {
  id: number;
  quantity: number;
  size: Size;
}
export type Size = "S" | "M" | "L" | "XL";
export interface Route {
  routeName: string;
  route: string;
}

export interface IFAQ {
  question: string;
  answer: string;
}

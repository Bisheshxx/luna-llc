import { Cart, Categories, Product } from "@/types";
import Saree from "../../public/Saree.jpeg";
import Kurtha from "../../public/Kurtha.jpeg";

export const categories: Categories[] = [
  {
    name: "Kurtha",
    images: Kurtha,
  },

  {
    name: "Saree",
    images: Saree,
  },
  {
    name: "Accessories",
    images:
      "https://superette.co.nz/cdn/shop/collections/Collection_Page_1b4b550d-82f6-49c3-b418-b4989b146777.png?v=1724038073&height=2000",
  },
];

import { Cart, Categories, Product } from "@/types";
import Saree from "../../public/Saree.jpeg";
import Kurtha from "../../public/Kurtha.jpeg";

export const products: Product[] = [
  {
    category: "Saree",
    price: 123,
    name: "Saree 1",
    id: "12",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
  },
  {
    category: "Accessories",
    price: 123,
    name: "Accessories 1",
    id: "122",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
  },
  {
    category: "Kurtha",
    price: 123,
    name: "Kurtha 1",
    id: "123",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
  },
  {
    category: "Lehenga",
    price: 123,
    name: "Lehenga 1",
    id: "12322",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
  },
  {
    category: "Saree",
    price: 123,
    name: "Saree 2",
    id: "22",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
  },
  {
    category: "Accessories",
    price: 123,
    name: "Accessories 2",
    id: "33",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
  },
  // {
  //   category: "Kurtha",
  //   price: 123,
  //   name: "Kurtha 2",
  //   id: "44",
  //   description:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
  // },
  // {
  //   category: "Lehenga",
  //   price: 123,
  //   name: "Lehenga 2",
  //   id: "55",
  //   description:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
  // },
];

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

export const cart: Cart[] = [
  {
    id: 1,
    name: "Acme Circles T-Shirt",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTttZ28gPqNOQ_4ZIIduJjr0hctHUcFfJ1aXA&s",
    quantity: 2,
    price: 29.99,
  },
  {
    id: 2,
    name: "Autumn Mug",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTttZ28gPqNOQ_4ZIIduJjr0hctHUcFfJ1aXA&s",
    quantity: 1,
    price: 12.99,
  },
  {
    id: 3,
    name: "Fall Fragrance Candle",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTttZ28gPqNOQ_4ZIIduJjr0hctHUcFfJ1aXA&s",
    quantity: 3,
    price: 16.99,
  },
];

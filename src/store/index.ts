import { Cart, Product } from "@/types";
import { create } from "zustand";
import saree1 from "../../public/Saree.jpeg";
import Kurtha1 from "../../public/kurtha/1.jpg";
import Kurtha2 from "../../public/kurtha/2.jpg";
import Kurtha3 from "../../public/kurtha/3.jpg";
import Kurtha4 from "../../public/kurtha/4.jpg";
import Kurtha6 from "../../public/kurtha/6.jpg";
import Kurtha7 from "../../public/kurtha/7.jpg";
import Kurtha9 from "../../public/kurtha/9.jpg";
import Saree1 from "../../public/saree/1.jpg";
import Saree2 from "../../public/saree/2.jpg";
import Saree3 from "../../public/saree/3.jpg";
import Saree4 from "../../public/saree/4.jpg";
import Saree5 from "../../public/saree/5.jpg";
import Saree6 from "../../public/saree/6.jpg";
import Saree7 from "../../public/saree/7.jpg";
import Saree8 from "../../public/saree/8.jpg";
import Lehenga1 from "../../public/lehenga/1.jpg";
import Lehenga2 from "../../public/lehenga/2.jpg";
import BIS1 from "../../public/back in collections/1.jpg";
import BIS2 from "../../public/back in collections/2.jpg";
import BIS3 from "../../public/back in collections/3.jpg";

const products = [
  {
    category: "Saree",
    price: 7700,
    name: "Saree 3",
    id: "0",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Saree1,
  },
  {
    category: "Saree",
    price: 3850,
    name: "Saree 2",
    id: "1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Saree2,
  },
  {
    category: "Saree",
    price: 7700,
    name: "Saree 3",
    id: "2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Saree3,
  },
  {
    category: "Saree",
    price: 7700,
    name: "Saree 4",
    id: "3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Saree4,
  },
  {
    category: "Saree",
    price: 7700,
    name: "Saree 5",
    id: "4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Saree5,
  },
  {
    category: "Saree",
    price: 7700,
    name: "Saree 6",
    id: "5",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Saree6,
  },
  {
    category: "Saree",
    price: 7700,
    name: "Saree 7",
    id: "6",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Saree7,
  },
  {
    category: "Saree",
    price: 7700,
    name: "Saree 8",
    id: "7",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Saree8,
  },
  {
    category: "Kurtha",
    price: 4970,
    name: "Kurtha 1",
    id: "8",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Kurtha1,
  },
  {
    category: "Kurtha",
    price: 2660,
    name: "Kurtha 2",
    id: "9",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Kurtha2,
  },
  {
    category: "Kurtha",
    price: 3640,
    name: "Kurtha 3",
    id: "10",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Kurtha3,
  },
  {
    category: "Kurtha",
    price: 3640,
    name: "Kurtha 4",
    id: "11",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Kurtha4,
  },
  {
    category: "Kurtha",
    price: 7700,
    name: "Kurtha 5",
    id: "12",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Kurtha6,
  },
  {
    category: "Kurtha",
    price: 7700,
    name: "Kurtha 6",
    id: "13",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Kurtha7,
  },
  {
    category: "Kurtha",
    price: 4970,
    name: "Kurtha 7",
    id: "14",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Kurtha9,
  },
  {
    category: "Lehenga",
    price: 10500,
    name: "Lehenga 1",
    id: "15",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Lehenga1,
  },
  {
    category: "Lehenga",
    price: 10500,
    name: "Lehenga 2",
    id: "16",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Lehenga2,
  },
  {
    category: "Saree",
    price: 10500,
    name: "BIS Saree 1",
    id: "17",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: BIS1,
    tag: "BIS",
  },
  {
    category: "Saree",
    price: 10500,
    name: "BIS Saree 2",
    id: "18",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: BIS2,
    tag: "BIS",
  },
  {
    category: "Kurtha",
    price: 10500,
    name: "BIS Kurtha 2",
    id: "19",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: BIS3,
    tag: "BIS",
  },
];
interface Store {
  product: Product[];
  cartStore: Cart[];
  pagination: {
    currentPage: number;
    perPage: number;
    total: number;
  };
}

const useStore: any = create((set) => ({
  productStore: products,
  cartStore: [],
  pagination: {
    currentPage: 1,
    perPage: 8,
    number: products.filter((product) => product.tag !== "BIS").length,
  },
  addToCart: (item: Cart) =>
    set((state: Store) => {
      return {
        cartStore: [...state.cartStore, item],
      };
    }),
  removeFromCart: (cartId: number) =>
    set((state: Store) => {
      return {
        cartStore: state.cartStore.filter((cart) => cart.id !== cartId), // Filter out the product with the given id}
      };
    }),
  changePage: (number: number) =>
    set((state: Store) => {
      return {
        pagination: {
          ...state,
          pagination: {
            currentPage: number,
            perPage: 8,
          },
        },
      };
    }),
}));
export default useStore;

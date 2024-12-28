import { Cart, Product } from "@/types";
import { create } from "zustand";
import saree1 from "../../public/Saree.jpeg";
import Kurtha1 from "../../public/Kurtha.jpeg";
import Kurtha2 from "../../public/Kurtha2.jpeg";
import Kurtha3 from "../../public/Kurtha3.jpeg";
import Saree2 from "../../public/Saree2.jpeg";
import Saree1 from "../../public/Saree1.jpeg";

const products = [
  {
    category: "Saree",
    price: 123,
    name: "Saree 1",
    id: "0",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Saree1,
  },
  {
    category: "Kurtha",
    price: 123,
    name: "Kurtha 2",
    id: "1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Kurtha1,
  },
  {
    category: "Kurtha",
    price: 123,
    name: "Kurtha 3",
    id: "2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Kurtha2,
  },
  {
    category: "Saree",
    price: 123,
    name: "Saree 2",
    id: "3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Saree2,
  },
  {
    category: "Kurtha",
    price: 123,
    name: "Kurtha 1",
    id: "4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
    image: Kurtha3,
  },

  // {
  //   category: "Accessories",
  //   price: 123,
  //   name: "Accessories 2",
  //   id: "33",
  //   description:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quibusdam saepe, eum totam numquam sunt. Magni quod repellat cupiditate accusantium accusamus non voluptas, aliquam, quaerat id, quibusdam dolorem quidem. Expedita.",
  // },
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
interface Store {
  product: Product[];
  cartStore: Cart[];
}

const useStore: any = create((set) => ({
  productStore: products,
  cartStore: [],
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
}));
// const useStore: any = create((set) => ({
//   productStore: products,
//   cartStore: [],
//   addToCart: (item: Cart) =>
//     set((state: Store) => {
//       const newCart = [...state.cartStore, item];
//       return {
//         cartStore: newCart,
//       };
//     }),
//   removeFromCart: (cartId: number) =>
//     set((state: Store) => ({
//       cartStore: state.cartStore.filter((cart) => cart.id !== cartId),
//     })),
// }));
export default useStore;

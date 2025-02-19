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
    name: "Mint Green Printed Saree",
    id: "0",
    image: Saree1,
  },
  {
    category: "Saree",
    price: 3850,
    name: "Black and White Chiffon Saree",
    id: "1",
    image: Saree2,
  },
  {
    category: "Saree",
    price: 7700,
    name: "Maroon Silk Saree",
    id: "2",
    image: Saree3,
  },
  {
    category: "Saree",
    price: 7700,
    name: "Black Silk Saree with Handwork Border",
    id: "3",
    image: Saree4,
  },
  {
    category: "Saree",
    price: 7700,
    name: "Multi colored Saree",
    id: "4",
    image: Saree5,
  },
  {
    category: "Saree",
    price: 7700,
    name: "White and Yellow Chiffon Saree",
    id: "5",
    image: Saree6,
  },
  {
    category: "Saree",
    price: 7700,
    name: "Teal Silk Saree with Handwork Border",
    id: "6",
    image: Saree7,
  },
  {
    category: "Saree",
    price: 7700,
    name: "Hand Embroidered White Saree",
    id: "7",
    image: Saree8,
  },
  {
    category: "Kurtha",
    price: 4970,
    name: "Silk Kurta Palazzo Dupatta Set",
    id: "8",
    image: Kurtha1,
  },
  {
    category: "Kurtha",
    price: 2660,
    name: "Spaghetti Kurta Set",
    id: "9",
    image: Kurtha2,
  },
  {
    category: "Kurtha",
    price: 3640,
    name: "Cotton Printed Kurta Set",
    id: "10",
    image: Kurtha3,
  },
  {
    category: "Kurtha",
    price: 3640,
    name: "Printed Kurta with Dupatta",
    id: "11",
    image: Kurtha4,
  },
  {
    category: "Kurtha",
    price: 7700,
    name: "Georgette Kurta Set",
    id: "12",
    image: Kurtha6,
  },
  {
    category: "Kurtha",
    price: 7700,
    name: "A-Line Kurta Set",
    id: "13",
    image: Kurtha7,
  },
  {
    category: "Kurtha",
    price: 4970,
    name: "A-Line Kurta Set",
    id: "14",
    image: Kurtha9,
  },
  {
    category: "Lehenga",
    price: 10500,
    name: "Chiffon Gharara Set",
    id: "15",
    image: Lehenga1,
  },
  {
    category: "Lehenga",
    price: 10500,
    name: "Chiffon Gharara Set",
    id: "16",
    image: Lehenga2,
  },
  {
    category: "Saree",
    price: 10500,
    name: "Teal Silk Saree with Handwork Border",
    id: "17",
    image: BIS1,
    tag: "BIS",
  },
  {
    category: "Saree",
    price: 10500,
    name: "Maroon Silk Saree",
    id: "18",
    image: BIS2,
    tag: "BIS",
  },
  {
    category: "Kurtha",
    price: 10500,
    name: "A-Line Kurta Set",
    id: "19",
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

const useStore: any = create(set => ({
  productStore: products,
  cartStore: [],
  pagination: {
    currentPage: 1,
    perPage: 8,
    number: products.filter(product => product.tag !== "BIS").length,
  },
  addToCart: (item: Cart) =>
    set((state: Store) => {
      const duplicateIndex = state.cartStore.findIndex(
        obj => obj.id === item.id
      );
      if (duplicateIndex !== -1) {
        const quantity =
          state.cartStore[duplicateIndex].quantity + item.quantity;
        const updatedCart = [...state.cartStore];
        updatedCart[duplicateIndex] = {
          ...updatedCart[duplicateIndex],
          quantity: quantity,
          price: item.price * quantity,
        };

        return { cartStore: updatedCart };
      }
      return {
        cartStore: [...state.cartStore, item],
      };
    }),
  removeFromCart: (cartId: number) =>
    set((state: Store) => {
      return {
        cartStore: state.cartStore.filter(cart => cart.id !== cartId), // Filter out the product with the given id}
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

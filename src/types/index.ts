export interface Product {
  category: string;
  price: number;
  name: string;
  id: string;
  description: string;
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
  images?: string;
}
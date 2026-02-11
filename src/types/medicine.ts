import { Category } from "./category";

export type Medicine = {
  id?: string;
  name: string;
  price: number;
  image: string;
  manufacturer?: string;
  description?: string;
  stock?: number;
  category?: Category;
  categoryId?: string;
  reviews?: Review[];
  seller?: {
    id: string;
    name: string;
    phoneNumber: string;
    email: string;
  };
};

export type Review = {
  id?: string;
  rating: number;
  comment: string;
  customer: {
    id?: string;
    name: string;
  };
};

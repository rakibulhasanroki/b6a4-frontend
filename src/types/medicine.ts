export type Medicine = {
  id?: string;
  name: string;
  price: number;
  image: string;
  manufacturer?: string;
  description?: string;
  stock?: number;
  categoryId?: string;
  reviews?: Review[];
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

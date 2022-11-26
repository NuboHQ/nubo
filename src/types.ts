export type NuboRoute = {
  path: string;
  method: 'ALL' | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';
  file: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: string[];
};

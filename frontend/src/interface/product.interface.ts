export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  reference: string;
  imagePath: string;
  categoryId: number;
  createdAt: string;
}

export interface ProductForm {
  name: string;
  description: string;
  price: number;
  brand: string;
  reference: string;
  imagePath: string;
  categoryId: string;
}

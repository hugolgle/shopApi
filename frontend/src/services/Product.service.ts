import { ProductForm } from "@/interface/product.interface";
import axios from "axios";

class ProductService {
  async getAll() {
    const response = await axios.get(
      import.meta.env.VITE_BACKEND_URL + `product`
    );
    return response;
  }

  async getById(id: string) {
    const response = await axios.get(
      import.meta.env.VITE_BACKEND_URL + `product/${id}`
    );
    return response;
  }

  async create(data: ProductForm) {
    const response = await axios.post(
      import.meta.env.VITE_BACKEND_URL + `product`,
      {
        ...data,
        categoryId: parseFloat(data.categoryId),
      },
      { withCredentials: true }
    );
    return response;
  }

  async uploadImage(formData: FormData) {
    const response = await axios.post(
      import.meta.env.VITE_BACKEND_URL + `upload`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      }
    );
    return response;
  }
}

export const productService = new ProductService();

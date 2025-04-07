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
}

export const productService = new ProductService();

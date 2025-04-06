import axios from "axios";

const API_URL = "http://localhost:8000/product";

class ProductService {
  async getAll() {
    const response = await axios.get(API_URL);
    return response;
  }

  async getById(id: string) {
    const response = await axios.get(API_URL + `/${id}`);
    return response;
  }
}

export const productService = new ProductService();

import axios from "axios";

class CategoryService {
  async getAll() {
    const response = await axios.get(
      import.meta.env.VITE_BACKEND_URL + `category`
    );
    return response;
  }
}

export const categoryService = new CategoryService();

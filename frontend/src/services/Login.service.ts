import axios from "axios";

const API_URL = "http://localhost:8000/login";

const login = async (email: string, password: string) => {
  const response = await axios.post(API_URL, { data: { email, password } });
  return response.data;
};

export { login };

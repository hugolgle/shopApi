import axios from "axios";
import { PaymentTypes } from "@/interface/payment.interface";

class PaymentService {
  async createCheckout(data: PaymentTypes[]) {
    const response = axios.post(`${import.meta.env.VITE_BACKEND_URL}checkout`, {
      data: { products: data },
    });
    return response;
  }
}

export const paymentService = new PaymentService();

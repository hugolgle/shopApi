import axios from "axios";

class CheckoutService {
  async retrieveCheckoutSession(sessionId) {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}checkout/session`,
      { data: { session: sessionId } }
    );
    return response;
  }
}

export const checkoutService = new CheckoutService();

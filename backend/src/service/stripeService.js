const Stripe = require("stripe");
const { product } = require("./excludeFields");

class StripeService {
  static #stripe = Stripe(process.env.STRIPE_API_KEY);

  static async createCheckoutSessions(products) {
    const session = await this.#stripe.checkout.sessions.create({
      success_url:
        process.env.FRONTEND_URL + "/payment/{CHECKOUT_SESSION_ID}/success",
      cancel_url:
        process.env.FRONTEND_URL + "/payment/{CHECKOUT_SESSION_ID}/cancel",
      line_items: products.map((product) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: product.name,
          },
          unit_amount: product.price * 100,
        },
        quantity: product.quantity,
      })),
      metadata: {
        products: JSON.stringify(
          products.map((product) => ({
            id: product.id,
            reference: product.reference,
            quantity: product.quantity,
          }))
        ),
      },
      mode: "payment",
      payment_method_types: ["card"],
    });
    return session.url;
  }

  static async retrieveCheckoutSession(sessionId) {
    const session = await this.#stripe.checkout.sessions.retrieve(sessionId);

    return {
      session: session.metadata,
    };
  }
}

module.exports = StripeService;

const Stripe = require("stripe");

class StripeService {
  static #stripe = Stripe(process.env.STRIPE_API_KEY);

  // TODO: Changer l'URL de redirection quand le front sera prêts
  static async createCheckoutSessions(products) {
    const session = await this.#stripe.checkout.sessions.create({
      success_url: "https://example.com/success",
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
      mode: "payment",
      payment_method_types: ["card"],
    });
    return session.url;
  }
}

module.exports = StripeService;

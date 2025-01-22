const Stripe = require("stripe");

class StripeService {
  static #stripe = Stripe(process.env.STRIPE_API_KEY);

  static test() {
    console.log("test");
  }

  // TODO: Création d'un produits mais aussi d'un tarif à l'associé
  static async createProducts(data) {
    // Création du produit
    const product = await this.#stripe.products.create({
      name: "gold plan",
    });

    // Création du tarif
    const price = await this.#stripe.prices.create({
      product: product.id,
      unit_amount: Math.round(99 * 100),
      currency: "eur",
    });
  }

  static async getProducts() {
    const products = await this.#stripe.products.list();
    return products.data;
  }

  // TODO : Mieux gérer les produits pour le mettre dans la session
  static async createCheckoutSessions() {
    const session = await this.#stripe.checkout.sessions.create({
      success_url: "https://example.com/success",
      line_items: [
        {
          price: "price_1QP5bGL5I9LrY3W4S0JmxJCD", 
          quantity: 2,
        },
      ],
      mode: "payment",
    });
    console.log(session);
    return session.url;
  }
}

module.exports = StripeService;

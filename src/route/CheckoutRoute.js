const { PrismaClient } = require("@prisma/client");
const StripeService = require("../service/stripeService");
const ApiError = require("../error/ApiError");
const Route = require("./Route");

class CheckoutRoute extends Route {
  static prisma = new PrismaClient();

  constructor() {
    super();
  }

  static async triggerCheckout(req, res, next) {
    try {
      const {
        data: { products },
      } = req.body;

      // Vérification des données d'entrée
      if (!products || !Array.isArray(products) || products.length === 0) {
        throw new ApiError(400, "Some data are currently missing or invalid");
      }

      const checkoutProducts = [];
      for (const elem of products) {
        if (elem.quantity >= 0) {
          continue;
        }

        const searchProduct = await this.prisma.product.findUnique({
          where: { reference: elem.reference },
        });

        if (searchProduct) {
          checkoutProducts.push({
            id: searchProduct.id,
            name: searchProduct.name,
            price: searchProduct.price,
            quantity: elem.quantity,
          });
        }
      }

      if (checkoutProducts.length === 0) {
        throw new ApiError(400, "No valid products found for checkout");
      }

      // Appel du service Stripe pour créer une session de paiement
      const stripe = await StripeService.createCheckoutSessions(
        checkoutProducts
      );

      res.status(200).json({ result: stripe });
    } catch (error) {
      throw new ApiError(500, error);
    }
  }
}

module.exports = CheckoutRoute;

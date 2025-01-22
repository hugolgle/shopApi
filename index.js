const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

// Router
const route = require("./src/route/Route");
const login = require("./src/route/LoginRoute");

// Middleware
const auth = require("./src/middleware/auth");
const error = require("./src/middleware/error");
const asyncHandler = require("./src/middleware/asyncHandler");

// Stripe Service
const StripeService = require("./src/service/stripeService");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//Route
app.post(
  "/login",
  asyncHandler(async (req, res) => {
    await login.login(req, res);
  })
);
app.post(
  "/user",
  asyncHandler(async (req, res) => {
    await login.createUser(req, res);
  })
);
app.get(
  "/:model",
  auth,
  asyncHandler(async (req, res) => {
    await route.getAll(req, res);
  })
);
app.get(
  "/:model/:id",
  auth,
  asyncHandler(async (req, res) => {
    await route.getById(req, res);
  })
);

app.post(
  "/:model",
  auth,
  asyncHandler(async (req, res) => {
    await route.create(req, res);
  })
);

app.use(error);

app.listen(port, async () => {
  // await StripeService.createProducts();
  // await StripeService.createCheckoutSessions();
  const products = await StripeService.getProducts();
  console.log(products);
  console.log(`Server is running on port ${port}`);
});

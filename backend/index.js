const express = require("express");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
const app = express();
const port = 8000;

// Router
const route = require("./src/route/Route");
const login = require("./src/route/LoginRoute");
const checkout = require("./src/route/CheckoutRoute");

// Middleware
const auth = require("./src/middleware/auth");
const error = require("./src/middleware/error");
const asyncHandler = require("./src/middleware/asyncHandler");

/**
 * Limiter Request
 *
 * Permet de limiter le nombre de requêtes par minute à 6
 */
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 120,
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

app.use(
  express.urlencoded({
    extended: true,
  }),
  limiter
);

app.use(express.json());

// Routes sécurisées renvoyant vers une route personnalisé
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
app.post(
  "/checkout",
  auth,
  asyncHandler(async (req, res) => {
    await checkout.triggerCheckout(req, res);
  })
);

/**
 * Routes sécurisées renvoyant vers une route partagé
 *
 * Recherche des données via le paramètre "model" dans l'URL, ainsi que l'ID si nécessaire
 * Permet de récupérer, créer, mettre à jour ou supprimer des données
 */
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

app.put(
  "/:model/:id",
  auth,
  asyncHandler(async (req, res) => {
    await route.update(req, res);
  })
);

app.delete(
  "/:model/:id",
  auth,
  asyncHandler(async (req, res) => {
    await route.delete(req, res);
  })
);

app.use(error);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});

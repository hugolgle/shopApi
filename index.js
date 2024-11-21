const express = require("express");
const app = express();
const port = 3000;

// Prisma
const { PrismaClient } = require("@prisma/client");

// Router
const route = require("./src/route/Route");
const login = require("./src/route/LoginRoute");

// Middleware
const auth = require("./src/middleware/auth");
const error = require("./src/middleware/error");
const asyncHandler = require("./src/middleware/asyncHandler");

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
    await route.createUser(req, res);
  })
);
app.get(
  "/:model",
  auth,
  asyncHandler(async (req, res) => {
    await route.getAll(req, res);
  })
);

app.use(error);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

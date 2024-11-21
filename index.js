const express = require("express");
const app = express();
const port = 3000;

// Prisma
const prismaClient = require("@prisma/client");

// Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

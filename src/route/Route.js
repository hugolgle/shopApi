const { PrismaClient } = require("@prisma/client");

class Route {
  #model;
  #prisma = new PrismaClient();
  constructor(model) {
    this.#model = model;
  }

  getAll() {
    const model = this.#model;
    return this.#prisma.model.findAll()
  }
}

const { PrismaClient } = require("@prisma/client");
const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");

class Route {
  static prisma = new PrismaClient();

  static test(req, res) {
    res.status(200).json({ result: "test" });
  }

  static async createUser(req, res) {
    const { firstname, lastname, email, password, address, city } = req.body;

    if (!firstname || !lastname || !email || !password || !address || !city) {
      throw new ApiError(400, "Missing required fields");
    }

    const alreadyUser = await this.prisma.user.findUnique({
      where: { email: email },
    });

    if (alreadyUser) {
      throw new ApiError(400, "Email already exists");
    }

    const role = await this.prisma.role.findUnique({
      where: { name: "USER" },
    });
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await this.prisma.user.create({
      data: {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: hashPassword,
        address: address,
        city: city,
        role: { connect: { id: role.id } },
      },
    });

    res.status(200).json({ result: user });
  }

  static async getAll(req, res) {
    const { model } = req.params;

    if (!model) {
      throw new ApiError(400, "Model not found");
    }

    const user = await this.prisma[model].findMany();
    res.status(200).json({ result: user });
  }
}

module.exports = Route;

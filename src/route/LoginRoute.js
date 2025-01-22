const ApiError = require("../error/ApiError");
const Route = require("./Route");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class LoginRoute extends Route {
  constructor() {
    super();
  }

  // TODO : Vérifier le mot de passe, si contient min 8 caractère, majuscule, minuscule etc
  static async createUser(req, res) {
    const {
      data: { firstname, lastname, email, password, address, city },
    } = req.body;

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

  static async login(req, res) {
    const {
      data: { email, password },
    } = req.body;

    if (!email || !password) {
      throw new ApiError(400, "Email or Password not provided");
    }

    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      throw new ApiError(401, "User not found");
    }

    const validHash = await bcrypt.compare(user.password, password);
    if (validHash) {
      throw new ApiError(401, "Invalid email or password");
    }

    const token = jwt.sign(
      { user: user, userId: user.id },
      user.id.toString(),
      { expiresIn: "24h" }
    );
    res.status(200).json({ result: token });
  }
}

module.exports = LoginRoute;

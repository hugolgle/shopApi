const ApiError = require("../error/ApiError");
const Route = require("./Route");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

class LoginRoute extends Route {
  constructor() {
    super();
  }

  static async createUser(req, res) {
    const {
      data: { firstname, lastname, email, password, address, city },
    } = req.body;

    if (!firstname || !lastname || !email || !password || !address || !city) {
      throw new ApiError(400, "Missing required fields");
    }

    // On vérifie sur le mot de passe contient au moins :
    // - 8 caractères,
    // - une majuscule,
    // - une minuscule,
    // - un chiffre,
    // - un caractère spécial
    if (
      password.length < 8 &&
      !password.match(/[A-Z]/) &&
      !password.match(/[a-z]/) &&
      !password.match(/[0-9]/) &&
      !password.match(/[^A-Za-z0-9]/)
    ) {
      throw new ApiError(
        400,
        "Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character"
      );
    }

    console.log("password", password);

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

    const validHash = await bcrypt.compare(password, user.password);
    if (!validHash) {
      throw new ApiError(401, "Invalid email or password");
    }

    const token = jwt.sign(
      { userId: user.id, role: user.roleId },
      user.id.toString(),
      { expiresIn: "24h" }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 jour
    });

    res.status(200).json({ result: "Login successfull" });
  }

  static async logout(req, res) {
    res.clearCookie("auth_token");
    res.status(200).json({ result: "Logout successfull" });
  }
}

module.exports = LoginRoute;

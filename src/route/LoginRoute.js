const ApiError = require("../error/ApiError");
const Route = require("./Route");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class LoginRoute extends Route {
  constructor() {
    super();
  }

  static async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new ApiError(400, "Email or Password not provided");
    }

    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      throw new ApiError(401, "User not found");
    }

    if (!(await bcrypt.compare(user.password, password))) {
      throw new ApiError(401, "Invalid email or password");
    }

    const token = jwt.sign(
      { user: user, userId: user.id.toString() },
      user.id.toString()
    );
    res.status(200).json({ result: token });
  }
}

module.exports = LoginRoute;

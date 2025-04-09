const ApiError = require("../error/ApiError");
const Route = require("./Route");

class ProfileRoute extends Route {
  constructor() {
    super();
  }

  static async getProfile(req, res) {
    const userId = req.user;

    if (!userId) {
      throw new ApiError(401, "User not authenticated");
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        address: true,
        city: true,
        role: {
          select: {
            id: false,
            name: true,
          },
        },
        commands: {
          select: {
            id: true,
            status: {
              select: {
                id: false,
                name: true,
              },
            },
            createdAt: true,
            details: {
              select: {
                id: false,
                product: true,
                quantity: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    res.status(200).json({ result: user });
  }
}

module.exports = ProfileRoute;

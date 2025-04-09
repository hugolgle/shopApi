const ApiError = require("../error/ApiError");
const Route = require("./Route");
const fs = require("fs");
const uuid = require("uuid");

class FileRoute extends Route {
  constructor() {
    super();
  }

  static async newFile(req, res) {
    const { file } = req.files;

    if (!file) {
      throw new ApiError(400, "File not found");
    }

    const fileName = `${uuid.v4()}.${file.name.split(".").pop()}`;
    const filePath = `./uploads/${fileName}`;

    res.status(200).json({ result: "test" });
  }

  static async getFile(req, res) {
    const { fileName } = req.params;

    if (!fileName) {
      throw new ApiError(400, "File name not found");
    }

    const filePath = `./uploads/${fileName}`;

    if (!fs.existsSync(filePath)) {
      throw new ApiError(404, "File not found");
    }

    res.download(filePath);
  }
}

module.exports = FileRoute;

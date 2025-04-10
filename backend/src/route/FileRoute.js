const ApiError = require("../error/ApiError");
const Route = require("./Route");
const { v4: uuid } = require("uuid");
const path = require("path");

class FileRoute extends Route {
  constructor() {
    super();
  }

  static async newFile(req, res) {
    try {
      if (!req.files || !req.files.file) {
        throw new ApiError(400, "Fichier non trouvé");
      }

      const file = req.files.file;
      const extension = path.extname(file.name);
      const fileName = `${uuid()}${extension}`;

      const publicDir = path.join(__dirname, "../../public");
      const savePath = path.join(publicDir, fileName);

      file.mv(savePath, (err) => {
        if (err) {
          console.error("Erreur lors du déplacement du fichier :", err);
          return res
            .status(500)
            .json({ error: "Erreur lors de l'enregistrement du fichier" });
        }

        res.status(200).json({
          filename: fileName,
          url: process.env.APP_URL + fileName,
        });
      });
    } catch (error) {
      console.error("Erreur newFile :", error);
      res.status(error.code || 500).json({ error: error.message });
    }
  }
}

module.exports = FileRoute;

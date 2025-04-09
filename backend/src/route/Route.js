const { PrismaClient } = require("@prisma/client");
const ApiError = require("../error/ApiError");

// Importation des schémas de validation et d'exclusion des champs
const excludeFields = require("../service/excludeFields");
const validateFields = require("../service/validateFields");

class Route {
  static prisma = new PrismaClient();
  // GET
  static async getAll(req, res) {
    const { model } = req.params;

    if (!model) {
      throw new ApiError(400, "Model not found");
    }

    const fields = excludeFields[model] || null;
    const table = await this.prisma[model].findMany({
      select: fields || undefined,
    });

    res.status(200).json({ result: table });
  }

  static async getById(req, res) {
    const { model, id } = req.params;

    if (!model || !id) {
      throw new ApiError(400, "Model or ID missing");
    }

    const fields = excludeFields[model] || null;
    const table = await this.prisma[model].findUnique({
      where: { id: isNaN(id) ? id : parseInt(id) },
      select: fields || undefined,
    });

    res.status(200).json({ result: table });
  }

  // POST
  static async create(req, res) {
    const { model } = req.params;
    const { data } = req.body;

    if (!data || Object.keys(data).length === 0) {
      throw new ApiError(401, "Bad data or not found");
    }

    const schema = validateFields[model];
    if (!schema) {
      throw new ApiError(400, "Schema of the model not found");
    }

    // Validation des données par rappport au schéma
    try {
      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      throw new ApiError(400, error.errors.join(", "));
    }

    const table = await this.prisma[model].create({ data });
    res.status(200).json({ result: table });
  }

  // PUT
  static async update(req, res) {
    const { model, id } = req.params;
    const { data } = req.body;

    if (!model || !id) {
      throw new ApiError(400, "Model or ID missing");
    }

    if (!data || Object.keys(data).length === 0) {
      throw new ApiError(401, "Bad data or not found");
    }

    const items = await this.prisma[model].findUnique({
      where: { id: parseInt(id) },
    });
    if (!items) {
      throw new ApiError(401, "Items not found");
    }

    const schema = validateFields[model];
    if (!schema) {
      throw new ApiError(400, "Schema of the model not found");
    }

    try {
      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      throw new ApiError(400, error.errors.join(", "));
    }

    const fields = excludeFields[model] || null;
    const updatedEntry = await this.prisma[model].update({
      where: { id: parseInt(id) },
      select: fields || undefined,
      data,
    });

    res.status(200).json({ result: updatedEntry });
  }

  // DELETE
  static async delete(req, res) {
    const { model, id } = req.params;

    if (!model || !id) {
      throw new ApiError(400, "Model or ID missing");
    }

    const items = await this.prisma[model].findUnique({
      where: { id: parseInt(id) },
    });
    if (!items) {
      throw new ApiError(401, "Items not found");
    }

    try {
      await this.prisma[model].delete({
        where: { id: parseInt(id) },
      });
      res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      throw new ApiError(404, "Entry not found or already deleted");
    }
  }
}

module.exports = Route;

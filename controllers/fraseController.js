const Frase = require("../models/frase");

module.exports = {
  async getAll(req, res, next) {
    try {
      const data = await Frase.getAll();
      console.log(`Frases: ${JSON.stringify(data)} `);
      return res.status(201).json(data);
    } catch (error) {
      console.log(`Error: ${error} `);
      return res.status(501).json({
        message: "Error al obtener las frases",
        error: error,
        success: false,
      });
    }
  },
  async registro(req, res, next) {
    try {
      const frase = req.body;
      const data = await Frase.create(frase);

      return res.status(201).json({
        success: true,
        message: "Frase guardada",
      });
    } catch (error) {
      console.log(`Error: ${error} `);
      return res.status(501).json({
        success: false,
        message: "Frase No guardada",
        error: error,
      });
    }
  },
  async eliminar(req, res, next) {
    try {
      const frase = req.body;
      const data = await Frase.delete(frase);

      return res.status(201).json({
        success: true,
        message: "Frase eliminada",
      });
    } catch (error) {
      console.log(`Error: ${error} `);
      return res.status(501).json({
        success: false,
        message: "Frase No eliminada",
        error: error,
      });
    }
  },
};

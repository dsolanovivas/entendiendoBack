const FraseController = require("../controllers/fraseController");
//const { app } = require('../server');

module.exports = (app) => {
  //VER LOS DATOS
  app.get("/api/frases/getAll", FraseController.getAll);

  //CREAR UN DATO
  app.post("/api/frases/create", FraseController.registro);

  //ELIMINAR DATOS
  app.post("/api/frases/delete", FraseController.eliminar);
};

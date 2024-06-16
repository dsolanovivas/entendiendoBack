const config = require("dotenv");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const logger = require("morgan");
const cors = require("cors");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { error } = require("console");

// RUTAS

const frases = require("./routes/fraseRoutes");

config.config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.disable("x - powered - by");
app.set("port", port);

frases(app);

server.listen(port, host, function () {
  console.log("Aplicacion de NodeJs " + process.pid + " Iniciada...");
});

//ERRORES
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.stack);
});

module.exports = {
  app: app,
  server: server,
};
//200 - ES CORRECTA URL
//404 - NO EXISTE URL
//500 - ERROR INTERNO

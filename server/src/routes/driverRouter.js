const { Router } = require("express");

const {
  driverGetHandler,
  driverGetIdHandrer,
  driverPostHandler,
  idHandler,
} = require("../handlers/driverHandlers");
const driverRouter = Router();
driverRouter.get("/", driverGetHandler);
driverRouter.get("/:idDriver", driverGetIdHandrer);
driverRouter.post("/", driverPostHandler);
driverRouter.delete("/:idDriver", idHandler);

module.exports = driverRouter;
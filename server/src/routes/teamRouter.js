const { Router } = require("express");
const { teamsHandler } = require("../handlers/teamHandlers");
const teamRouter = Router();

teamRouter.get("/", teamsHandler);

module.exports = teamRouter;

const routes = require("express").Router();
const TaskController = require("../controllers/TarefaController");

routes.get("/", TaskController.getAllTarefas);
routes.post("/criarTarefa", TaskController.createTarefa);

module.exports = routes;

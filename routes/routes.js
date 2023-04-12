const routes = require("express").Router();
const TarefaController = require("../controllers/TarefaController");

routes.get("/", TarefaController.getAllTarefas);
routes.post("/criarTarefa", TarefaController.createTarefa);
routes.get("/editarTarefaForm", TarefaController.editarTarefaForm);
routes.post("/editarTarefa", TarefaController.editarTarefa);
routes.get("/apagarTarefa", TarefaController.apagarTarefa);

module.exports = routes;

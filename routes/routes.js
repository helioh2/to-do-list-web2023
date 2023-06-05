const routes = require("express").Router();
const TarefaController = require("../controllers/TarefaController");
const AutenticacaoController = require("../controllers/AutenticacaoController");

routes.get("/", TarefaController.getAllTarefas);
routes.get("/buscarTarefa", TarefaController.getTarefaByTexto);
routes.post("/criarTarefa", TarefaController.createTarefa);
routes.get("/editarTarefaForm", TarefaController.editarTarefaForm);
routes.post("/editarTarefa", TarefaController.editarTarefa);
routes.get("/apagarTarefa", TarefaController.apagarTarefa);

routes.get("/check/:id", TarefaController.marcarComoFeita);

routes.get("/loginForm", AutenticacaoController.loginForm);
routes.get("/signupForm", AutenticacaoController.signupForm);
routes.post("/signup", AutenticacaoController.signup);
routes.post("/login", AutenticacaoController.login);
routes.get("/logout", AutenticacaoController.logout);

module.exports = routes;

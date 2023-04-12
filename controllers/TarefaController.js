const TarefaService = require("../services/TarefaService")

const getAllTarefas = async (req, res) => {

    try {
        const listaTarefas = await TarefaService.getAllTarefas();
        return res.render("index", {listaTarefas, tarefaSelecionada: null});
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}

const editarTarefaForm = async (req, res) => {
    const id = req.query.id;
    try {
        const tarefaSelecionada = await TarefaService.getTarefaById(id);
        const listaTarefas = await TarefaService.getAllTarefas();
        return res.render("index", {listaTarefas, tarefaSelecionada});
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}

const editarTarefa = async (req, res) => {
    const tarefa = req.body;
    try {
        await TarefaService.updateTarefa(tarefa);
        res.redirect("/");
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}

const createTarefaDummy = async (req, res) => {
    const tarefa = {
        texto: "Lavar louça",
        feito: false,
    }

    try {
        await TarefaService.createTarefa(tarefa);
        return res.redirect("/");
    } catch (err) {
        res.status(500).send({error: err.message})
    }
};


const createTarefa = async (req, res) => {
    const tarefa = req.body; //traz os dados da requisição em formato JSON (ver express.urlencoded() em app.js)

    if (!tarefa.texto) {
        return res.redirect("/")
    }

    try {
        await TarefaService.createTarefa(tarefa);
        return res.redirect("/");
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}

const apagarTarefa = async (req, res) => {
    const id = req.query.id;
    try {
        await TarefaService.deleteTarefaById(id);
        res.redirect("/")
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}

module.exports = {
    getAllTarefas,
    createTarefaDummy,
    createTarefa,
    editarTarefa,
    editarTarefaForm,
    apagarTarefa
}
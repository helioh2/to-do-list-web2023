const { StatusCodes } = require("http-status-codes");
const TarefaService = require("../services/TarefaService")

const getAllTarefas = async (req, res) => {
    if (!req.session.usuarioLogado) {
        return res.render("index", {listaTarefas: [], tarefaSelecionada: null});
    }
    const idUsuario = req.session.usuarioLogado._id
    try {
        const listaTarefas = await TarefaService.getAllTarefasByIdUsuario(idUsuario);
        return res.render("index", {listaTarefas, tarefaSelecionada: null});
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}


const getTarefaByTexto = async (req, res) => {

    if (!req.session.usuarioLogado) {
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "Usuario não logado"})     
    }

    const texto = req.query.texto
    const idUsuario = req.session.usuarioLogado._id

    const tarefas = await TarefaService.getTarefaByTexto(texto, idUsuario);
    
    res.send(tarefas)
}

const editarTarefaForm = async (req, res) => {
    const id = req.query.id;
    try {
        const tarefaSelecionada = await TarefaService.getTarefaById(id);
        const listaTarefas = await TarefaService.getAllTarefasByIdUsuario(tarefaSelecionada.idUsuario);
        return res.render("index", {listaTarefas, tarefaSelecionada});
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}

const editarTarefa = async (req, res) => {
    const tarefa = req.body;
    console.log(tarefa)
    try {
        await TarefaService.updateTarefa(tarefa);
        res.redirect("/");
    } catch (err) {
        res.status(500).send({error: err.message})
    }
}


const createTarefa = async (req, res) => {
    const tarefa = req.body; //traz os dados da requisição em formato JSON (ver express.urlencoded() em app.js)
    const idUsuario = req.session.usuarioLogado._id
    tarefa.idUsuario = idUsuario

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

const marcarComoFeita = async (req, res) => {
    const id = req.params.id
    try {
        await TarefaService.marcarComoFeita(id);
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};



module.exports = {
    getAllTarefas,
    getTarefaByTexto,
    createTarefa,
    editarTarefa,
    editarTarefaForm,
    apagarTarefa,
    marcarComoFeita,
}
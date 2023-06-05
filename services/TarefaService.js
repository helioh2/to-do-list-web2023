const Tarefa = require("../models/Tarefa")

const getAllTarefasByIdUsuario = async (idUsuario) => {
    return await Tarefa.find();
}

const getTarefaByTexto = async (texto, idUsuario) => {
    return await Tarefa.find(
        {
            idUsuario: idUsuario,
            texto: { $regex: texto },
        }
    )
}

const getTarefaById = async (id) => {
    const tarefa = await Tarefa.findById({_id: id});
    return tarefa
}

const createTarefa = async (tarefa) => {
    await Tarefa.create(tarefa)
}

const updateTarefa = async (tarefa) => {
    await Tarefa.updateOne({ _id: tarefa._id }, tarefa)
}

const deleteTarefaById = async (id) => {
    await Tarefa.deleteOne({_id: id});
}

const marcarComoFeita = async (id) => {
    const tarefa = await Tarefa.findOne({ _id: id });
    tarefa.feito = tarefa.feito || true; // se estiver false, passa pra true, se estiver true continua true 
    // if (!tarefa.feito) {
    //     tarefa.feito = true;
    // }
    await Tarefa.updateOne({ _id: id }, tarefa);
}

module.exports = {
    getTarefaById,
    getAllTarefasByIdUsuario,
    getTarefaByTexto,
    createTarefa,
    updateTarefa,
    deleteTarefaById,
    marcarComoFeita
}
const Tarefa = require("../models/Tarefa")

const getAllTarefasByIdUsuario = async (idUsuario) => {
    return await Tarefa.find({idUsuario: idUsuario});
}

const getTarefaById = async (id) => {
    const tarefa = await Tarefa.findById({_id: id});
    return tarefa
}

const createTarefa = async (tarefa) => {
    await Tarefa.create(tarefa)
}

const updateTarefa = async (tarefa) => {
    await Tarefa.updateOne(tarefa)
}

const deleteTarefaById = async (id) => {
    await Tarefa.deleteOne({_id: id});
}

module.exports = {
    getTarefaById,
    getAllTarefasByIdUsuario,
    createTarefa,
    updateTarefa,
    deleteTarefaById
}
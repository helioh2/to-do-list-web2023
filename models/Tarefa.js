const mongoose = require("mongoose");

const tarefaSchema = new mongoose.Schema({
    texto: {
        type: String,
        require: true,
    },
    feito: {
        type: Boolean,
        require: true,
        default: false,
    },
    data: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("Tarefa", tarefaSchema);
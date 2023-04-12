const mongoose = require("mongoose");

const conectarAoDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:root@todolist2023.wz6huvy.mongodb.net/?retryWrites=true&w=majority", // setar por variável de ambiente mais tarde
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err)); 
};

module.exports = conectarAoDb;

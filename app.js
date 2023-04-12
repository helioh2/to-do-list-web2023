const express = require('express')
const path = require('path');
const routes = require("./routes/routes")
const conectarAoDb = require("./database/db")

conectarAoDb();
const app = express()
const port = 3000;  //será alterado por meio de variáveis de ambiente depois 

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded())
app.use(routes)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
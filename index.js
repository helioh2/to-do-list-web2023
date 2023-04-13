require("dotenv").config()

const express = require('express')
const session = require('express-session');
const cookieParser = require("cookie-parser");
const path = require('path');
const routes = require("./routes/routes")
const conectarAoDb = require("./database/db")

conectarAoDb();
const app = express()
const port = process.env.PORT || 3000;  //será alterado por meio de variáveis de ambiente depois 

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded())

const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767", //TODO: passar para var de ambiente
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));
app.use(cookieParser());

//Middleware para permitir acesso à variável usuario em session a todos os templates
app.use(function(req, res, next) {
  res.locals.usuarioLogado = req.session.usuarioLogado;
  next();
});


app.use(routes)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
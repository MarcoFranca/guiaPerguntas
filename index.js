const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const conection = require('./database/database');
const Pergunta = require('./database/Perguntas');
//database
conection.authenticate().then(()=>{
    console.log("autenticação feita com BD")
}).catch((err)=>{
    console.log(err)
})

//ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));
//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas
app.get("/",(req, res)=>{
    Pergunta.findAll({raw:true, order:[
            ['updatedAt','DESC']
        ]}).then(perguntas => {
    res.render("index",{
        perguntas:perguntas
    });
    })
});

app.get('/perguntas',(req, res)=>{
    res.render("pages/perguntas/perguntas")
})

app.post('/savequest',(req, res)=>{
    const titulo = req.body.title;
    const descricao = req.body.quest;
    Pergunta.create({
        title:titulo,
        description:descricao
    }).then(()=>{
        res.redirect("/");
    });
});

app.listen(8080,()=>{console.log("app rodando")})
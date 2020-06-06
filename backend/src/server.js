const express=require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes=require("./routes");

const app=express();

mongoose.connect('mongodb+srv:/',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
//req.query = acessar query params(para filtros)
//req.paramns = acesar route params(para edição e delete)
//req.body = acessar corpo da requisição(para criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','uploads' )));
app.use(routes);

app.listen(3333);

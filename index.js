const express = require('express');
const mongoose = require('mongoose');
const attach = require('./dbase')

const app = express();
app.use(express.json())
const port = 4000;
const createmongoose = mongoose
.connect(
    "mongodb+srv://vsaravananc:Flutteratlas@shoes.dsvlo.mongodb.net/usershoe?retryWrites=true&w=majority&appName=shoes")
.then(
    app.listen(port)
)
app.post("/",
    async(req,res)=>{
      const getter = await attach.create(req.body);
       res.status(200).json(getter);
     }
);
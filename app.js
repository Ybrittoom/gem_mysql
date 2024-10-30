//pegando as dependencias
const express = require('express')
const alunosRoutes = require('./routes/alunos')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())

//rotas dos alunos
app.use('/alunos', alunosRoutes)

//iniciar o servidor brabo
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})
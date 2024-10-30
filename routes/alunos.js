const express = require('express')
const router = express.Router()
const alunosController  =require('../controllers/alunosController')

//rota para listar todos os alunos
router.get('/', alunosController.listarAlunos)

//rota para adicionar um aluno
router.post('/add', alunosController.adicionarAluno)

module.exports = router
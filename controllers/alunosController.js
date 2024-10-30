const conexao = require('../db/db')

//funçao pra listar todos os alunos
exports.listarAlunos = (req, res) =>{
    const query = `SELECT * FROM ViolinoAluno`;
    conexao.query(query, (err, results) => {
        if (err) {
            console.log('Erro ao buscar dados:', err)
            res.status(500).send('Erro ao buscar dados')
        } else {
            res.status(200).json(results)
        }
    })
}

//funçao pra adicionar um aluno
exports.adicionarAluno = (req, res) => {
    const  {nome, licoes, TotalLicoes, hinos, TotalHinos, observacao, professor } = req.body;
    const query = `INSERT INTO ViolinoAluno (nome, licoes, TotalLicoes, hinos, TotalHinos, observacao, professor) VALUES (?, ?, ?, ?, ?, ?, ?)`

    conexao.query(query, [nome, licoes, TotalLicoes, hinos, TotalHinos, observacao, professor], (err, results) => {
        if (err) {
            console.log('Erro ao inserir dados:', err)
            res.status(500).send('Erro ao inserir dados:', err)
        } else {
            res.status(200).send('Aluno adicionado com sucesso')
        }
    })
}
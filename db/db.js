const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '',
    database: 'gem_CCB'
})

connection.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao MySql:', err) 
    } else { 
        console.log('Conectado ao Mysql')
    }

})

module.exports = connection


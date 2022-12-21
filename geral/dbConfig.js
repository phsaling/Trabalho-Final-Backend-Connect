// Para configurar o nosso Banco de Dados:

const mysql = require('mysql2');

const banco = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306, // Obs.: a porta 3306 geralmente está sendo usada p/ WorkBench
    user: "root",
    password: "root",
    database: 'baseleads'
})

function createDatabase(nome){
    const query = `CREATE DATABASE ${nome}`
    banco.query(query), function(err, result){
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    }
}

function deleteDatabase(nome){
    const query = `DROP DATABASE ${nome}`
    banco.query(query, function(err, result){
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    }
)}

function createTable(nome){
    const query = `CREATE TABLE ${nome}(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(50) NOT NULL, email VARCHAR(100) NOT NULL, telefone VARCHAR(50) NOT NULL)`
    banco.query(query), function(err, result){
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    }
}

function dropTable(nome){
    const query = `DROP TABLE ${nome}`
    banco.query(query), function(err, result){
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    }
}

function insertInto(nome){
    const query = `INSERT INTO ${nome} (nome, email, telefone) VALUES ("Jocemar", "jocemar@jocemar", "45 9999-9999")`
    banco.query(query, function(err, result){
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    })
}

//banco de dados: baseleads
//tabela: cadastro
//createDatabase("baseleads")
//createTable("cadastro")
//insertInto("cadastro")


module.exports = banco;

const banco = require('../dbConfig')

function postarDados(req,res){
    console.log(req.body)
    const query = `INSERT INTO cadastro (nome, email, telefone) VALUES ('${req.body.nome}', '${req.body.email}', '${req.body.telefone}')`
    banco.query(query, function(err, result){
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.sendStatus(201)
        }
    })
}

function obterDados(req, res){
    const query = `SELECT * FROM cadastro`
    banco.query(query, function(err, result){
    if(err){
        console.log(err)
    }else{
        res.send(result)
        console.log(result)
    }
    })
}

function obterPorId(req, res){
    const id = req.params.id
    const query = `SELECT * FROM cadastro WHERE id = ${id}`
    banco.query(query, function(err, result){
    if(err){
        console.log(err)
    }else{
        res.send(result)
    }
    })
}

function deletarPorId(req, res){
    const id = req.params.id
    const query = `SELECT * FROM cadastro WHERE id = ${id}`
    banco.query(query, function(err, result){
    if(err){
        console.log(err)
    }else{
        res.sendStatus(200)
    }
    })
}

function putDados(req, res){
    const id = req.params.id
    const query = `UPDATE cadastro
    '${req.body.nome}'= , 
    '${req.body.email}'= ,
    '${req.body.telefone}'=
    WHERE id = ${id}`
    banco.query(query, function(err, result){
    if(err){
        console.log(err)
    }else{
        res.sendStatus(201)
    }
    })
}

module.exports = {postarDados, obterDados, obterPorId, deletarPorId, putDados};
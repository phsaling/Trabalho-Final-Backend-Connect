const banco = require('../dbConfig');

// get Elementos
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

// get Elementos By ID
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

// post Elementos no Banco de Dados
function postarDados(req, res){
    const query = `INSERT INTO cadastro (nome, email, telefone) VALUES ('${req.body.nome}', '${req.body.email}', '${req.body.telefone}')`
    banco.query(query, function(err, result){
    if(err){
        console.log(err)
    }else{
        res.sendStatus(201)
    }
    })
}





// delete Elementos no Banco de Dados
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

// update Elementos no Banco de Dados
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



module.exports={obterDados,obterPorId,postarDados,deletarPorId}

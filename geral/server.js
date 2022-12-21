const cors = require('cors')
const express = require('express')
const banco = require('./dbConfig')
const userRoutes = require('./routes/userRoutes')
const petRoutes = require('./routes/petRoutes')
const app = express()
app.use(cors())


app.use(express.json())

app.use('/public', express.static('public'))

app.use('/users', userRoutes)

app.use('/pets', petRoutes)

app.listen(3000, conectarBanco);


function conectarBanco(){
    banco.connect(function (err, result){
        if(err){
            console.log(err)
        }else{
            console.log("Banco de Dados Conectado")
        }
    })
}
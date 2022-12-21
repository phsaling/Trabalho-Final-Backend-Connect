const express = require('express')
const router = express.Router()
const petConstroller = require('../controllers/petscontroller')

const userController = require('../controllers/UserControllers')

router.get('/', userController.obterDados)

router.get('/:id', userController.obterPorId)

router.post('/', userController.postarDados)

module.exports=router
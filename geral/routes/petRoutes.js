const express = require('express')
const router = express.Router()
const petConstroller = require('../controllers/petscontroller')

router.post('/', petConstroller.postarDados)
router.get('/', petConstroller.obterDados) 

module.exports=router;
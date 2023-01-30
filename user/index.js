const express = require('express');
const getUser = require('./getUser')
const postUser = require('./postUser')
const delUser = require('./delUser')
const updateUser = require('./updateUser')

const router = express.Router()


router.get('/getuser',  getUser)
router.post( '/postuser' , postUser)
router.delete( '/deleteuser' , delUser)
router.patch( '/updateuser' , updateUser)

module.exports= router
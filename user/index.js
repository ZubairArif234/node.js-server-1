const express = require('express');
const getUser = require('./getUser')
const postUser = require('./postUser')
const delUser = require('./delUser')
const updateUser = require('./updateUser')
const jwt = require('jsonwebtoken')

const router = express.Router()

function varifyToken (req, res , next){

    let headerToken = req.headers.authorization;
    let userToken = headerToken.split(" ")[1]
console.log(userToken);
    var decoded = jwt.verify(userToken, 'zubairjwt', (err, decoded) =>{
        if (!err){
            console.log(decoded)
            next()
            
        }else{
            
            console.log(err)
        }
    });
}

router.get('/getuser', varifyToken, getUser)
router.post( '/postuser' , postUser)
router.delete( '/deleteuser' , delUser)
router.patch( '/updateuser' , updateUser)

module.exports= router
const express = require('express');
const getUser = require('./getUser')
const postUser = require('./postUser')
const delUser = require('./delUser')
const updateUser = require('./updateUser')
const loginuser = require('./login')
const jwt = require('jsonwebtoken')

const router = express.Router()

function varifyToken (req, res , next){

//     let headerToken = req.headers.authorization;
//     let userToken = headerToken.split(" ")[1]
// console.log(userToken);
//     var decoded = jwt.verify(userToken, 'zubairjwt', (err, decoded) =>{
//         if (!err){
//             console.log(decoded)
//             next()
            
//         }else{
            
//             console.log(err)
//         }
//     });
//     console.log(decoded)
try {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1]
        var decoded = jwt.verify(token, 'saylani');
        console.log("chal raha hai", decoded)
        next()
    } else {
        res.status(401).send({ message: "token not provided" })
    }
} catch (err) {
    res.status(401).send({ message: "unauthrized" })
}

}

router.get('/getuser', varifyToken, getUser)
router.post( '/postuser' , postUser)
router.post("/login", loginuser);
router.delete( '/deleteuser' , delUser)
router.patch( '/updateuser' , updateUser)

module.exports= router
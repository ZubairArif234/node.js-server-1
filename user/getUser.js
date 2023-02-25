
// const express =require('express')
const arr = require('../constat/array')
const userModel = require('../schemas/userscheme')


const getUser= (req, res) =>{
    const data = {...req.body}
   userModel.find({} , (err,doc) =>{
        if (err){
            console.log(err);
        }else{
            console.log('mil gaya' , doc);

            res.status(200).send( doc)
        }
    })


}
module.exports=getUser

const { default: mongoose } = require('mongoose');
const arr = require('../constat/array')

const userModel = require('../schemas/userscheme')
const bcrypt = require('bcrypt')
const Joi = require('joi');
const jwt = require('jsonwebtoken');

let privateKey = 'zubairjwt'

const postUser = async (req, res) => {

    let data = req.body;


    const hash = bcrypt.hashSync(data.password, 5);

    const newDevide = new userModel({
        name: data.name,
        email: data.email,
        password: hash
    })


    const schema = Joi.object({
        email: Joi.string().email(),
        name: Joi.string().required(),
        
        password: Joi.string()
            // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })
    try {
        await schema.validateAsync(data);

    } catch (err) { console.log('nahi chala joi'); }


    userModel.findOne({ email: data.email }, (err, doc) => {

        if (doc) {
            console.log('phele se hai')
            res.status(401).send('phele se hai')
        } else {

            jwt.sign({newDevide}, privateKey,  function(err, token) {
                if (err){
                    console.log(err);

                }else{

                    console.log(token);
                }
              });
            newDevide.save((err) => {
                if (err) {
                    console.log(err)
                    res.status(401).send({ 'sava bhi  nhi ho gaya': err })
                } else {
                    res.status(200).send({ 'sava bhi ho gaya': newDevide })
                    console.log('data send');
                }
            })
        }
    })
    


    //  res.status(200).send({"post hogaya data" :data})



}
module.exports = postUser
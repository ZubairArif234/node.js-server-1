
const { default: mongoose } = require('mongoose');
const arr = require('../constat/array')

const userModel = require('../schemas/userscheme')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Joi = require('joi');
// const imgtest = require('./assets/imgtesting.jpeg')

let privateKey = 'zubairjwt'
// const cloudinary = require('cloudinary').v2;


// // Configuration 
// cloudinary.config({
//   cloud_name: "drqtz5s5m",
//   api_key: "439336325423782",
//   api_secret: "EUesYP69VCtzuY9PQUKAxwARDzI"
// });

const postUser = async (req, res) => {

    let data = req.body;



//     const rescloud = cloudinary.uploader.upload(data.pic, {public_id: "meripic"})

//     rescloud.then((data) => {
//   console.log(data);
//   console.log(data.secure_url);
// }).catch((err) => {
//   console.log(err);
// });


// // Generate 
// const url = cloudinary.url("meripic", {
//   width: 100,
//   height: 150,
//   Crop: 'fill'
// });



// // The output url
// console.log(url);

    const hash = bcrypt.hashSync(data.password, 5);
   

    const newDevide = new userModel({
        name: data.name,
        email: data.email,
        password: hash
    })


    const schema = Joi.object({
        email: Joi.string().email(),
        name: Joi.string().required(),
        
        password: Joi.string(),
        pic: Joi.string()
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
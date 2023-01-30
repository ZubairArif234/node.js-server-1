
const { default: mongoose } = require('mongoose');
const arr = require('../constat/array')

const userModel = require('../schemas/userscheme')



const postUser= (req , res) =>{

    let data = {...req.body};

//     // const userModel = mongoose.model('users' , userSchema);
//     const newDevide = new userModel({
//         name: data.name,
//         email: data.email,
//         age: data.age,
//         password:data.password
//     })

//     newDevide.save((err)=>{
//    if (err){
//     console.log(err)
//    }else{
//     console.log('data send');
//    }
//     })

    // console.log(req.body);
    // console.log({data});
    // arr.push(data)
     res.status(200).send({"post hogaya data" :data})



}
module.exports=postUser
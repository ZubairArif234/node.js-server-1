
const arr = require('../constat/array')
const userModel = require('../schemas/userscheme')


const delUser= (req, res) =>{
let data = req.body
 let query = req.query.age;
 console.log(query.age);
userModel.deleteMany({'age': query} , (err)=>{
    if (err){
        console.log(err);
    }else {
        console.log('hogaya delete');

    }
})
//  let index=arr.findIndex((item)=> item)
//  console.log(index)
//  arr.splice(index,1)
 res.status(200).send({"message":'hoga del'})


}
module.exports=delUser
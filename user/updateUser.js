
const arr = require('../constat/array')
const userModel = require('../schemas/userscheme')



const updateUser= (req, res) =>{
let data = req.body


userModel.updateOne({"name":"ali"} , {$set:{"age":data.age}},
(err) => {
    if (err){
        console.log(err);
    }else{
        console.log("hogaya update");

    }
})
// arr[data.id].name=data.name

res.status(200).send({"message" : "hogaya update"})


}
module.exports=updateUser

const mongoose = require('mongoose')

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    email: { type: String, required:true , unique:true},
    name: { type: String, required:true },
    // age: { type: Number, required:true},
    password: { type: String, required:true },
    pic: { type: String },
 // bio: { type: String, match: /[a-z]/ },
    // date: { type: Date, default: Date.now },
    // buff: Buffer/
} ,{
    timestamps:true
});


const userModel = mongoose.model('users' , userSchema);
module.exports=userModel;

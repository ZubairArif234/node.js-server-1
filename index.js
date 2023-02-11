 const express = require('express')
 const user = require('./user')
 const cors = require('cors')

 const bodyParser = require('body-parser');
 
 const app=express()
 app.use(cors())
 const mongoose = require('mongoose');
 mongoose.connect('')
  .then(() => console.log('Connected!'));


 app.use(bodyParser.json());
  
  app.get('/' , (req,res) =>{
 res.send(new Date)
  })



  app.use('/user' , user)

  const port = process.env.port || 3000;
  app.listen(port , ()=>{ console.log('port is running');})

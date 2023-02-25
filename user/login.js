

const userModel = require('../schemas/userscheme')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const loginuser = async (req, res) => {
  const data = req.body
  console.log(data
    );
  const user = await userModel.find({ email: req.body.email });

  if (user.length) {
    const match = bcrypt.compareSync(req.body.password, user[0].password);
    if (match) {
      var token = jwt.sign({
        email: user[0].email, _id: user[0]._id, role: user[0].role,
        username: `${user[0].firstName} ${user[0].lastName}`
      }, 'saylani');
      res.status(200).send({ status: 200, message: "user login successfuly", token });
    } else {
      res
        .status(401)
        .send({ status: 401, message: "email/password incorrect" });
    }
  } else {
    res.status(404).send({ status: 404, message: "user not found" });
  }
};

module.exports= loginuser;
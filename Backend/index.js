
const { response } = require("express");
const express = require("express");
require('./db/config')
const User = require("./db/User");
const app = express();
// package to resolve cors issue
const cors = require('cors');

//midddleware used
app.use(cors());
app.use(express.json());


app.post('/register', async (req, res) => {
 
  let user=new User(req.body)
  let result = await user.save();
  res.send(result)
})

app.listen(5000)
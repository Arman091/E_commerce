require("dotenv").config();
let url = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.rkx2xm3.mongodb.net/e-commerce?retryWrites=true&w=majority`;
const mongoose = require("mongoose");
mongoose.connect(url);

const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require('./routes')
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true}));
app.use(bodyParser.json())
app.use(cookieParser())

routes(app);
mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("DB connected");
  } catch {
    console.log("Error, can't connect to DB");
  }}
connectDB();
app.listen(port, () => {
    console.log('Server is running in port: ', + port)
})
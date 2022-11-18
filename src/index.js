console.log("loading environment variables")
require('dotenv').config()

const express = require("express")
const routes = require("./routes/router")
const mongoose = require("mongoose")

const mongo_uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`

mongoose.connect(mongo_uri,
    {
        authSource: process.env.MONGO_USER,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to database !!');
    })
    .catch((err)=>{
        console.log('Connection failed !!'+ err.message);
    });


const App = express()
App.use(express.json())
App.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", ['*'])
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.append("Access-Control-Allow-Headers", "Content-Type")
    res.append("Accept-CH", "Device-Memory")
    next();
});
App.use("/", routes)

App.listen(process.env.APP_PORT, () => {
    console.log("app started on :", process.env.APP_PORT)
})
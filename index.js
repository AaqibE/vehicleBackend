const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require('dotenv').config()
const vehicleRouter = require("./routes/vehicle");


 const app = express();

 const port = process.env.PORT;

 //middleware
 app.use(bodyParser.json());

 conn().catch((err)=> console.log(`Got error while connecting to database`, err))
async function conn(){
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to DB")
}


app.use("/vehicle", vehicleRouter.router)


 app.listen(port, ()=>console.log(`The App is running on port ${port}`))
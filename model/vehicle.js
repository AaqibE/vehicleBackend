const mongoose = require("mongoose")
const { Schema } = require("mongoose")
const vehicleSchema = new Schema({

    model :{
        type : String,
        required : true
    },
    chasisNo :{
        type : String,
        required: true,
        unique : true
    },
    VehicleType :{
        type : String,
        required: true
    },
    vehicleStatus:{
        type : String,
        default : "Good"
    },
    owner: {
        type : String,
        required : true
    },
    pollution :{
        type : String,
        default : "Data is not available"
    },
    insurance : {
        type : String,
        default : "None"
    }

})

exports.Vehicle = mongoose.model('Vehicle', vehicleSchema);
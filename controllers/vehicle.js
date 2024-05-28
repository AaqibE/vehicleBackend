const {Vehicle} = require("../model/vehicle");

exports.createVehicle = async(req,res)=>{
    const vehicleDetail = new Vehicle(req.body);
    const doc = await vehicleDetail.save();

    if(!doc){
        res.json({message: "Registration failed"})
    }else{
        res.status(200).json({
            message: "success"
        })
    }
}

exports.getVehicleDetail = async(req,res)=>{
    const{chasisNo, owner} = req.body;
    try {
        const vehicleDetail =await Vehicle.findOne({chasisNo: chasisNo, owner : owner})
        if(!vehicleDetail){
            res.status(400).json({Message : "Invalid inputs"})
        }else{
            res.status(200).json({vehicleDetail})
        }
    } catch (error) {
        res.status(400).json(error)
        
    }

}
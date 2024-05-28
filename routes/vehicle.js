const express = require("express");
const { createVehicle, getVehicleDetail } = require("../controllers/vehicle");

const router = express.Router();

router.post("/create", createVehicle)
router.post("/getDetail", getVehicleDetail)

exports.router = router;
const express = require("express")
const dataController = require("../controllers/data_controller")

const routes = express.Router()

routes.post("/data", dataController.createData)
routes.get("/data", dataController.getData)

module.exports = routes
const DeviceDetector = require("device-detector-js")
const os = require("os")
const DataModel = require("../models/data_model")

class DataService {
    constructor() {
        this.deviceDetector = new DeviceDetector()
    }

    async createData(req, res) {
        try {
            const clientDetail = this.deviceDetector.parse(req.header("user-agent"))
            let [remainingRamValue, totalRamValue] = [os.freemem(), os.totalmem()]
            if (req.header("device-memory")) {
                remainingRamValue = Number(req.header("device-memory"))
                totalRamValue = Number(req.header("device-memory"))
            }

            const newData = {
                cpuname: clientDetail.device.model || os.cpus()[0].model,
                type: clientDetail.os.name || os.version(),
                platform: clientDetail.os.platform || os.platform(),
                release: clientDetail.os.version || os.release(),
                remainingRam: remainingRamValue,
                totalRam: totalRamValue
            }

            const response = await DataModel(newData).save()
            
            return response
        } catch (error) {
            throw res.status(500)
        }
    }

    async getData(req, res) {
        try {
            const data = await DataModel.find()
            return data
        } catch (error) {
            throw res.status(500)
        }
    }
}

module.exports = new DataService
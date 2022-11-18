const DataModel = require("../models/data_model")
const DeviceDetector = require("device-detector-js")


class DataService {
    constructor() {
        this.deviceDetector = new DeviceDetector()
    }

    async createData(req, res) {
        try {
            const clientDetail = this.deviceDetector.parse(req.header("user-agent"))
            let [remainingRamValue, totalRamValue] = [0, 0]
            if (req.header("device-memory")) {
                remainingRamValue = Number(req.header("device-memory"))
                totalRamValue = Number(req.header("device-memory"))
            }

            const newData = {
                cpuname: clientDetail.device.model,
                type: clientDetail.os.name,
                platform: clientDetail.os.platform,
                release: clientDetail.os.version,
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
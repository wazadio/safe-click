const dataService = require("../services/data_service")

class DataController {
    async createData(req, res) {
        const result = await dataService.createData(req, res)
        res.json(result)
    }

    async getData(req, res) {
        const result = await dataService.getData(req, res)
        res.json(result)
    }
}

module.exports = new DataController
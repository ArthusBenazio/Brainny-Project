const timeRegisteredService = require('../services/timeRegisteredService');

module.exports = {
    insertTime: async (req, res) => {
        let json = { error: '', result: [] };

        const { userId } = req.params

        const dateNow = new Date();
        const dateNowHours = dateNow.getHours();
        const dateNowMinutes = dateNow.getMinutes();
        const dateDay = dateNow.getDate();
        const dateMounth = dateNow.getMonth()+1;
        const dateYear = dateNow.getFullYear();

        const finalDate = `${dateDay}/${dateMounth}/${dateYear} ${dateNowHours}:${dateNowMinutes}`
        
        const dateTime = await timeRegisteredService.insertTime(finalDate, userId)

        if (dateTime) {
            json.result = dateTime;
        }

        res.json({message: `registered time! ${finalDate}`});
        
    },

    getAll: async (req, res) => {
        let json = { error: '', result: [] };

        const allClocks = await timeRegisteredService.getAll()

        if (allClocks) {
            json.result = allClocks;
        }

        res.json(json);

       

        
    }
}
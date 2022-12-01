const db = require('../db');

module.exports = {

    getAll: () => {
        return new Promise((accept, reject) => {
            db.query("SELECT rt.time_registred, u.name FROM registered_time rt INNER JOIN user u ON rt.id_user = u.id", (error, results) => {
                if(error)  { reject(error); return; }
                accept(results);
            });
        })
    },



    insertTime: (date, userId) => {
        return new Promise((accept, reject) => {
            db.query("INSERT INTO registered_time (time_registred, id_user) VALUES (?, ?)", [date, userId], (error, results) => {
                if(error)  { reject(error); return; }
                accept(results);
            });
        })
    },

    
};
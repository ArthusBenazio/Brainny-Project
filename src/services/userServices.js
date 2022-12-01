const db = require('../db');

module.exports = {
    getAll: () => {
        return new Promise((accept, reject) => {
            db.query('SELECT * FROM user', (error, results) => {
                if(error) { reject(error); return; }
                accept(results);
            });
        });
    },

    getId: (id) => {
        return new Promise((accept, reject) => {
            db.query('SELECT * FROM user WHERE id = ?', [id], (error, results) => {
                if(error)  { reject(error); return; }
                if(results.length > 0) {
                    accept(results[0]);
                } else {
                    accept(false);
                }
            });
        });
    },

};
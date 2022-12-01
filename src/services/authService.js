const db = require('../db');

module.exports = {

    signIn: (email, password) => {
        return new Promise((accept, reject) => {
            
            db.query('SELECT * FROM user WHERE email = ? AND password = ?', 
            [email, password], (error, results) => {

                
                if(error) { return error.message; }

                if (results.length > 0) {
                    accept(results[0])

                } else {
                    accept(error)
                }
            });
            
        });
    }
};
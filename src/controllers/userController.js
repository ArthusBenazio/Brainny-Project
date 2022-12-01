const userService = require('../services/userServices');
const bcrypt = require('bcryptjs');

module.exports = {
    getAll: async (req, res) => {
        let json = { error: '', result: [] };

        let users = await userService.getAll();

        for (let i in users) {
            json.result.push({
                id: users[i].id,
                name: users[i].name,
                email: users[i].email,
                function: users[i].role
            })
        }
        res.json(json);
    },

    getId: async (req, res) => {
        let json = { error: '', result: {} };

        let id = await req.params.id;
        let user = await userService.getId(id);

        if (user) {
            json.result = user;
        }

        res.json(json);
    },

    insertUser: async (req, res) => {
        let json = { error: '', result: {} };

        let { name, email, password, role } = req.body
        
        let hashedPassword = await bcrypt.hash(password, 8);

        if (name && email && password && role) {
            let addUser = await userService.insertUser(name, email, password = hashedPassword, role);
            json.result = {
                id: addUser,
                name,
                email,
                password,
                role
            };
        } else {
            json.error
        }

        
        

        res.json(json);
    },

}




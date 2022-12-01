const authService = require('../services/authService');
const jwt = require('jsonwebtoken');

module.exports = {

    sigIn: async (req, res) => {
        let json = { error: '', result: {} };

        let { email, password } = req.body;

        let login = await authService.signIn(email, password)

        password !== req.body.password &&
            res.status(401).json("Wrong credentials!");

        const accessToken = jwt.sign({userEmail: login.email, isAdmin: login.isAdmin}, process.env.JWT_SEC, { expiresIn: 1000 })

        if (login) {
            json.result = login;
        }
        res.json({accessToken, json});
        
    }
};
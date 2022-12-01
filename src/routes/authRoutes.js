const { Router } = require("express");
const authController = require('../controllers/authController');

const authRouter = Router();

authRouter.post('/auth', authController.sigIn);

module.exports = authRouter;
const { Router } = require("express");
const userController = require('../controllers/userController');
const { verifyTokenAndAuthorization } = require("../verifyToken");

const userRouter = Router();

userRouter.get('/users', verifyTokenAndAuthorization, userController.getAll);
userRouter.get('/user/:id', verifyTokenAndAuthorization, userController.getId);

module.exports = userRouter;
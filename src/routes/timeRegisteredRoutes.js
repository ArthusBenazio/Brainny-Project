const express = require("express");
const timeRegisteredRouter = express.Router();
const timeRegisteredController = require('../controllers/timeRegisteredController');
const { verifyToken, verifyTokenAndAuthorization } = require("../verifyToken");

timeRegisteredRouter.get('/clockin', verifyTokenAndAuthorization, timeRegisteredController.getAll);
timeRegisteredRouter.post('/clockin/:userId', verifyToken, timeRegisteredController.insertTime);

module.exports = timeRegisteredRouter;
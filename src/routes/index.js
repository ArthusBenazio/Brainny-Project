const { Router } = require('express');
const userRouter = require('./userRoutes');
const timeRegisteredRouter = require('./timeRegisteredRoutes');
const authRouter = require('./authRoutes');

const router = Router();

router.use('/api', userRouter);
router.use('/api', timeRegisteredRouter);
router.use('/api', authRouter);

module.exports = router
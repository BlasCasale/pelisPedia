const { Router } = require('express');
const router = Router();
const userRouter = require('./user.routes');
const movieRouter = require('./movie.routes');

router.use('/users', userRouter);
router.use('/movies', movieRouter);

module.exports = router;
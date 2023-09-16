const { Router } = require('express');
const router = Router();
const userRouter = require('./user.routes');
const movieRouter = require('./movie.routes');
const favoriteRouter = require('./favorite.routes');

router.use('/users', userRouter);
router.use('/movies', movieRouter);
router.use('/favorites', favoriteRouter);

module.exports = router;
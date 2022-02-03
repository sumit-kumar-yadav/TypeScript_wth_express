import express, { Router } from 'express';

const router = Router();
const { homeController } = require('../controllers/home');

router.get('/', homeController);

// Api route 
router.use('/api', (req, res, next) => {
    console.log("/api + ");
    next();
}, require('./api'));


module.exports = router;
import express, { Router } from 'express';

const router = Router();
const { homeController } = require('../controllers/home');

router.get('/', homeController);

// Api route 
router.use('/api', require('./api'));


module.exports = router;
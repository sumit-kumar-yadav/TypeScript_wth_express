import express, { Router } from 'express';

const router = Router();
const homeController = require('../../../controllers/api/v1/home');

router.get('/', (req, res, next)=>{
    console.log("/");
    next();
}, homeController.homeController);


module.exports = router;
import express, { Router } from 'express';

const router = Router();
const homeController = require('../../../controllers/api/v1/home');

router.get('/', homeController.homeController);


module.exports = router;
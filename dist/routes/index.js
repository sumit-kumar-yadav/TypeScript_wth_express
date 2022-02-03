"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const { homeController } = require('../controllers/home');
router.get('/', homeController);
// Api route 
router.use('/api', require('./api'));
module.exports = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const homeController = require('../../../controllers/api/v1/home');
router.get('/', (req, res, next) => {
    console.log("/");
    next();
}, homeController.homeController);
module.exports = router;

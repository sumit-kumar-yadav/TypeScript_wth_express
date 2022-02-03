"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/v1', (req, res, next) => {
    console.log("/v1 + ");
    next();
}, require('./v1'));
module.exports = router;

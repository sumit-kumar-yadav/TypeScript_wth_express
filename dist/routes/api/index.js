"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// To practice axios 
router.use('/v1', require('./v1'));
// To practice CRUD operation using Sequilize and postgres
router.use('/v2', require('./v2'));
module.exports = router;

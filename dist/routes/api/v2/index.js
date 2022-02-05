"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const { fetchContacts, createContact } = require('../../../controllers/api/v2/home');
router.get('/', fetchContacts);
router.post('/create-contact', createContact);
module.exports = router;

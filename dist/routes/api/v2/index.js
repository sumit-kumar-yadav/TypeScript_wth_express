"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const { fetchContacts, createContact, deleteContact, updateContact } = require('../../../controllers/api/v2/home');
// CRUD API's for COntact list
router.get('/', fetchContacts);
router.post('/create-contact', createContact);
router.put('/update-contact/:id', updateContact);
router.delete('/delete-contact/:id', deleteContact);
module.exports = router;

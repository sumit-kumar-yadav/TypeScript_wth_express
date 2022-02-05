import express, { Router } from 'express';

const router = Router();
const { fetchContacts, createContact } = require('../../../controllers/api/v2/home');

router.get('/', fetchContacts);
router.post('/create-contact', createContact);

module.exports = router;

import { Router } from 'express';

const router = Router();

// To practice axios 
router.use('/v1', require('./v1'));

// To practice CRUD operation using Sequilize and postgres
router.use('/v2', require('./v2'));

module.exports = router;
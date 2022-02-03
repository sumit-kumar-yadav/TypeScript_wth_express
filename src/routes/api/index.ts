import { Router } from 'express';

const router = Router();

router.get('/v1', (req, res, next)=>{
    console.log("/v1 + ");
    next();
}, require('./v1'));



module.exports = router;
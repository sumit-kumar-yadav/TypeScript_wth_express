import express, { Router } from 'express';

const router = Router();
const {homeController, getAllPosts, createPost} = require('../../../controllers/api/v1/home');

router.get('/', homeController);

// Making POST and GET request using axios
// Get all the posts from JSONPlaceholder server
router.get('/get-all-posts', getAllPosts);
router.get('/create-a-post', createPost);



module.exports = router;
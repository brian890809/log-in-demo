import express from 'express'

const router = express.Router()

import controller from '../controllers/firebase-auth-controller.js'
import postController from '../controllers/post-controller.js'

import {verifyToken} from '../middleware/index.js'

router.get('/api/posts', verifyToken, postController.getPosts)

router.post('/api/register', controller.registerUser);
router.post('/api/login', controller.loginUser);
router.post('/api/logout', controller.logoutUser);
router.post('/api/reset-password', controller.resetPassword);

export default router

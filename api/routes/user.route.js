import express from 'express';
import { test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utills/verifyUser.js';
// import {
//   test,
//   updateUser,
//   deleteUser,
// } from '../controllers/user.controller.js';
// import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// router.get('/', test);
router.post('/update/:id', verifyToken, updateUser);
// router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/', test);

export default router;
import {register, login, logout} from '../controllers/authController.js'
import express from 'express';
const router=express.Router();
router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').post(logout)
export default router

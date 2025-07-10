import express from 'express'
import {addStock,deleteStock,editStock,getStocks, getNetPL} from '../controllers/UserStocks.js'
import authenticateUser from '../middleware/authenticate.js'

const router = express.Router()

router.route('/userStocks').get(authenticateUser,getStocks)
router.route('/userStocks').post(authenticateUser,addStock)
router.route('/userStocks/:id').delete(authenticateUser,deleteStock)
router.route('/userStocks/:id').patch(authenticateUser,editStock)

export default router
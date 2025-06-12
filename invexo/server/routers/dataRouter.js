import express from 'express'
import {getMarketDetails, getStockDetails,getSingleStock} from '../controllers/marketsController.js'
import authenticateUser from '../middleware/authenticate.js';

const router =express.Router()

router.route('/markets').get(authenticateUser,getMarketDetails)
router.route('/stocks').get(authenticateUser,getStockDetails)
router.route('/stocks/:Stocksymbol').get(authenticateUser,getSingleStock)
router.route('/stocks/:Stocksymbol').get(authenticateUser,getSingleStock)


export default router
const express=require('express')
const pool= require('../db/mySql')
const stockDetails = require('../Controllers/Fundamental/stockDetails');
const stockFinancials = require('../Controllers/Fundamental/stockFinancials')

const router=new express.Router()

router.get('/fundamental/stockDetails', stockDetails.getStockDetails);
router.get('/fundamental/financials', stockFinancials.getStockFinancials);

module.exports=router
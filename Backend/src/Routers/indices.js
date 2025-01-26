const express=require('express')
const { getIndexData } = require('../Controllers/Indices/indices')
const { fetchTopGainers } = require('../Controllers/Indices/topGainers')
const { fetchTopLoosers } = require('../Controllers/Indices/topLoosers')

const router=new express.Router();

router.get('/indices', getIndexData);
router.get('/indices/topGainers', fetchTopGainers);
router.get('/indices/topLoosers', fetchTopLoosers);

module.exports=router;
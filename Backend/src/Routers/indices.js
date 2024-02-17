const express=require('express')
const indices = require('../Controllers/Indices/indices')

const router=new express.Router();

router.get('/indices',indices.getIndexData);

module.exports=router;
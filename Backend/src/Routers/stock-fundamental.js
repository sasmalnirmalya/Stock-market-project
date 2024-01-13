const express=require('express')
const pool= require('../db/mySql')

const router=new express.Router()

router.get('/fundamental/marketCap',async(req,res)=>{
    console.log(req.query)
    pool.query(`select market_cap,company from nifty_500_stats where industry="IT" order by market_cap desc`,(err,result,field)=>{
        if(err){
            res.status(400).send(err)
            return console.log(err)
        }
        res.status(201).send(result)
    })
})

router.get('/stocklist',async(req,res)=>{
    pool.query(`select company, industry, symbol, category, current_value from nifty_50_fundamental_data where Industry=Financial Service `,(err,result,field)=>{
        if(err){
            res.status(400).send(err)
            return console.log(err)
        }
        res.status(201).send(result)
    })
})

router.get('/index/nifty-50',async(req,res)=>{
    try{
        const [data,rows]= await pool.execute(`select * from nifty_50 `)

        res.status(200).send({data:data});
    }
    catch (err){
        return res.status(400).send(err);
    }
    
})

router.get('/fundamental/compare', async(req,res)=>{
    try{
        const [data,rows]=await pool.execute('select * from nifty_50_fundamental_data where Industry=?',['Financial Services']);
        return res.status(200).send({'data':data});
    }
    catch (err){
        return res.status(400).send(err);
    }
})

module.exports=router
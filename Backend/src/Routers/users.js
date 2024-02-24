const express=require('express');
const pool= require('../db/mySql');
const bodyParser = require('body-parser');
const uuid=require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt= require('bcryptjs');
const auth = require('../Middleware/auth')

const router=new express.Router()

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

const secretKey = 'your_secret_key'; 

router.post('/users/signup',async (req,res)=>{
    try{
        const newUuid = uuid.v4();
        password = await bcrypt.hash(req.body.password, 8);
        const authToken = jwt.sign(newUuid, secretKey);
        const [user, row] = await pool.execute('INSERT INTO users (user_id, first_name, last_name, password,auth_token) VALUES (?, ?, ?, ?,?)',
            [newUuid, req.body.firstName, req.body.lastName, password, authToken]);
        console.log(user);
        return res.status(200).send({'Auth Token':authToken , fName: req.body.firstName, lName: req.body.lastName, user_id: newUuid});
    }
    catch (err){
        console.log(err)
        res.status(400).send(err);
    }
    
})

router.post('/users/login',async (req,res)=>{

    try{
        const user = await getUserByCredentials(req.body.userId);
        const isMatch = await bcrypt.compareSync(req.body.password, user.password);
        if (isMatch) {
            const authToken = await generateAuthToken(user);
            return res.status(200).send({'Auth Token':authToken , fName: user.firstName, lName: user.lastName, user_id: user.user_id});
        }
        else{
            res.status(400).send('invalid Credentials');
        }
    }
    catch(err){
        res.status(400).send(err);
    }  
})

router.delete('/users/logout',auth, async (req,res)=>{
    try{
        let authToken=null;
        await pool.execute('UPDATE users SET auth_token = ? WHERE user_id = ?', [authToken, req._id]);
        res.status(200).send({msg:'Logged out succesfully'});
    }
    catch (err) {
        console.log(err);
        res.status(400).send({msg:'Failed to logut'});
    }
})

async function getUserByCredentials(userId){
    try {
        let [user,fields] =await pool.execute('select * from users where user_id=?',[userId]);
        if(user.length>0){
            return user[0];
        }
        else{
            throw new Error('Invalid Credentials');
        }
    }
    catch{
        console.error(error);
        throw error;
    }
}

async function generateAuthToken(user){
    try {
        const token = jwt.sign(user.user_id, secretKey);
        await pool.execute('UPDATE users SET auth_token = ? WHERE user_id = ?', [token, user.user_id]);
        return token;
    } catch (error) {
        console.error(error);
        throw error;
    }

}

module.exports=router


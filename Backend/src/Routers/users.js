const express=require('express');
const pool= require('../db/mySql');
const bodyParser = require('body-parser');
const uuid=require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt= require('bcryptjs');

const router=new express.Router()

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

const secretKey = 'your_secret_key'; 

router.post('/users/signup',async (req,res)=>{
    try{
        const newUuid = uuid.v4();
        password = await bcrypt.hash(req.body.password, 8);
        const authToken = jwt.sign(newUuid, secretKey);
        const [user, row] = await pool.execute('INSERT INTO users (user_id, First_Name, Last_Name, password,Auth_token) VALUES (?, ?, ?, ?,?)',
            [newUuid, req.body.firstName, req.body.lastName, password, authToken]);
        return res.status(200).send({'Auth Token':authToken});
    }
    catch (err){
        res.status(400).send(err);
    }
    
})

router.post('/users/login',async (req,res)=>{

    try{
        const user = await getUserByCredentials(req.body.userId);
        const isMatch = await bcrypt.compareSync(req.body.password, user.password);
        if (isMatch) {
            const authToken = await generateAuthToken(user);
            return res.status(200).send({'Auth Token':authToken});
        }
        else{
            res.status(400).send('invalid Credentials');
        }
    }
    catch(err){
        res.status(400).send(err);
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
        await pool.execute('UPDATE users SET Auth_token = ? WHERE user_id = ?', [token, user.user_id]);
        return token;
    } catch (error) {
        console.error(error);
        throw error;
    }

}

module.exports=router


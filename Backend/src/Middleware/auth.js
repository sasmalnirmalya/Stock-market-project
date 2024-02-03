const jwt = require('jsonwebtoken')

const auth = async (req,res,next)=>{
    try{
    
        const token= req.header('Authorization').replace('Bearer ','');
        const decoded = jwt.verify(token, 'your_secret_key');
        req._id = decoded;
        next()
    } catch (err){

        res.status(401).send({ error: 'Please authenticate.' })
    }
   
}

module.exports= auth
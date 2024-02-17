const axios = require('axios');
const indices = require('../../resources/stocklist')


exports.getIndexData = async (req, res) => {
    let index = indices[req.query['index']];
    let query = '';
    index.forEach((item)=>{
        query=query+item+".NS,";
    });
    let url='https://fmpcloud.io/api/v3/quote/'+query+'?apikey=75d50292cad61f6ffdb1b26a7d670506';
    const details= await axios(url);
    return res.status(200).send({data:details.data});
  };



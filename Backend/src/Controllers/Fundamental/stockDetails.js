const axios = require('axios');


exports.getStockDetails = async (req, res) => {
  console.log(req.query);
    let url='https://fmpcloud.io/api/v3/quote/'+req.query['stockName']+'?apikey=75d50292cad61f6ffdb1b26a7d670506';
    const details= await axios(url);
    console.log(details.data);
    //JSON.parse(details);
    return res.status(200).send(details.data);
};
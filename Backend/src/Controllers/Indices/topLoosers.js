const { client, headers } = require('../../Cookie/cookie');

const nseUrlLoosers = 'https://www.nseindia.com/api/live-analysis-variations?index=loosers';

const fetchTopLoosers = async (req,res) => {
  try {
    // Fetch data
    const response = await client.get(nseUrlLoosers, { headers });
    return   res.status(200).send({ data: response.data.NIFTY.data.slice(0,5) });  
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};


module.exports = {fetchTopLoosers}


  
  
  

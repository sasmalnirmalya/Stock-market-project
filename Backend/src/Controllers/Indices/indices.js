const { client, headers } = require('../../Cookie/cookie');

const nseUrlIndices = 'https://www.nseindia.com/api/allIndices';

const getIndexData = async (req,res) => {
  try {
    // Fetch data
    const response = await client.get(nseUrlIndices, { headers });
    const indices = response.data.data.filter((item)=>{
        return item.indexSymbol=="NIFTY 50" || item.indexSymbol=="NIFTY BANK"
        || item.indexSymbol=="NIFTY AUTO" || item.indexSymbol=="NIFTY IT"
        || item.indexSymbol=="NIFTY PHARMA" || item.indexSymbol=="NIFTY MIDCAP 50"

    })
    return   res.status(200).send({ data: indices });  
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};


module.exports = { getIndexData }


  
  
  

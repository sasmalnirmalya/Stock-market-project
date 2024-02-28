const indices = require('../../resources/stocklist')
const axios = require('axios');

 exports.streamIndexData= async (socket) => {
   let indexName = 'NIFTY50';

   socket.on('message', async (data) => {
     indexName = data
     let index = indices[indexName]
     let query = '';
     index?.forEach((item) => {
       query = query + item + ".NS,";
     });
     let url = 'https://fmpcloud.io/api/v3/quote/' + query + '?apikey=75d50292cad61f6ffdb1b26a7d670506';
     const details = await axios(url);
     socket.emit('message', { data: details.data });
   })

   const interval = setInterval(async () => {
     try {
       let index = indices[indexName]
       let query = '';
       index.forEach((item) => {
         query = query + item + ".NS,";
       });
       let url = 'https://fmpcloud.io/api/v3/quote/' + query + '?apikey=75d50292cad61f6ffdb1b26a7d670506';
       const details = await axios(url);
       socket.emit('message', { data: details.data });
     } catch (error) {
       console.error('Error fetching stock data:', error);
     }
   }, 5000);

   socket.on('disconnect', () => {
     clearInterval(interval);
   });


}

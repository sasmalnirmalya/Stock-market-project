const axios = require('axios');


exports.getStockFinancials = async (req, res) => {
    let url='https://fmpcloud.io/api/v3/income-statement/'+req.query['stockName']+'?period=quarter&limit=400&apikey=75d50292cad61f6ffdb1b26a7d670506';
    
    const details= await axios(url);

    let data=details.data;
    let financialData=data.map((item)=>{
      return {
        date: item.date,
        symbol : item.symbol,
        reportedCurrency: item.reportedCurrency,
        calendarYear: item.calendarYear,
        period: item.period,
        revenue: item.revenue,
        grossProfit: item.grossProfit,
        eps: item.eps,
      }
    });
    return res.status(200).send(financialData);
};
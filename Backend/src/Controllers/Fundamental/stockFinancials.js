const axios = require('axios');


exports.getStockFinancials = async (req, res) => {
  try {
    var url = ''
    if (req.query['period'] == 'annual') {
      url = 'https://fmpcloud.io/api/v3/income-statement/' + req.query['stockName'] + '?limit=120&apikey=75d50292cad61f6ffdb1b26a7d670506'
    }
    else if (req.query['period'] == 'quarter') {
      url = 'https://fmpcloud.io/api/v3/income-statement/' + req.query['stockName'] + '?period=quarter&limit=400&apikey=75d50292cad61f6ffdb1b26a7d670506';
    }

    const details = await axios(url);

    let data = details.data;
    let financialData = data.map((item) => {
      return {
        date: item.date,
        symbol: item.symbol,
        reportedCurrency: item.reportedCurrency,
        calendarYear: item.calendarYear,
        period: item.period,
        revenue: item.revenue,
        grossProfit: item.grossProfit,
        eps: item.eps,
      }
    });
    return res.status(200).send({ fData: financialData });
  }
  catch (err) {
    return res.status(400).send(err);
  }
    
};
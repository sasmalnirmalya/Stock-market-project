const axios = require('axios');
const { wrapper } = require('axios-cookiejar-support');
const { CookieJar } = require('tough-cookie');

let jar = new CookieJar();
let client = wrapper(axios.create({ jar }));

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'application/json, text/plain, */*',
  'Accept-Language': 'en-US,en;q=0.9',
  'Referer': 'https://www.nseindia.com/',
  'Connection': 'keep-alive',
};

const fetchInitialCookies = async () => {
  try {
    jar = new CookieJar();
    client = wrapper(axios.create({ jar }));
    await client.get('https://www.nseindia.com', { headers });
    console.log('Initial cookies fetched');
  } catch (error) {
    console.error('Error fetching initial cookies:', error.message);
  }
};

// Fetch initial cookies immediately
fetchInitialCookies();

// Reset cookies every 30 minutes
setInterval(fetchInitialCookies, 30 * 60 * 1000);

module.exports = { client, headers };
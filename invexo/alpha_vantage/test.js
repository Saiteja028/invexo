
const axios = require('axios');

const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=demo&apikey=5V4BQ9QQ00I5ZG07';
const params = {
  function: 'TIME_SERIES_DAILY',
  symbol: 'IBM',
  apikey: 'YOUR_API_KEY'
};

axios.get(url, { params })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

const axios = require('axios');
const qs = require('qs');

const url = 'https://api.zeno.africa';

// Data to be sent
const data = {
  create_order: 1,
  buyer_name: 'william',
  buyer_phone: '0689726060',
  buyer_email: 'william@zeno.co.tz',
  amount: 1000,
  account_id: 'zp82240',
  secret_key: '',
  api_key: ''
};

// Convert data to x-www-form-urlencoded format
const formattedData = qs.stringify(data);

axios.post(url, formattedData, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });
